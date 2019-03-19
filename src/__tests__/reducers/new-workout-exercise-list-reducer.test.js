import newWorkoutExerciseListReducer from './../../reducers/new-workout-exercise-list-reducer';
import { v4 } from 'uuid';
import constants from './../../constants';

const { c } = constants;
const initialExerciseID = v4();
const initialSetID = v4();
const initialState = {
  workoutID: '',
  workoutTitleInput: '',
  workoutDateInput: '',
  workoutNotesInput: '',
  masterExerciseList: [
    {
      exerciseID: initialExerciseID,
      exerciseNumber: 1,
      exerciseName: '',
      setList: [
        {
          setID: initialSetID,
          setNumber: 1,
          weight: '',
          reps: ''
        }
      ]
    }
  ]
};
let action;

describe('newWorkoutExerciseListReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(newWorkoutExerciseListReducer(initialState, { type: null })).toEqual(initialState);
  });

  test('Should successfully add new exercise data to masterExerciseList', () => {
    const newExerciseID = v4();
    const newSetID = v4();
    action = {
      type: c.ADD_EXERCISE,
      newExerciseID: newExerciseID,
      newSetID: newSetID
    }
    expect(newWorkoutExerciseListReducer(initialState, action)).toEqual(
      {
        "masterExerciseList": [
          {
            "exerciseID": initialExerciseID,
            "exerciseName": "",
            "exerciseNumber": 1,
            "setList": [
              {
                "reps": "",
                "setID": initialSetID,
                "setNumber": 1,
                "weight": ""
              }
            ]
          },
          {
            "exerciseID": newExerciseID,
            "exerciseName": "",
            "exerciseNumber": 2,
            "setList": [
             {
               "reps": "",
               "setID": newSetID,
               "setNumber": 1,
               "weight": ""
             }
           ]
          }
        ],
        "workoutDateInput": "",
        "workoutID": "",
        "workoutNotesInput": "",
        "workoutTitleInput": ""
      }
    );
  });

  test('Should successfully add new set data to setList based on exercise ID provided', () => {
    const addedSetID = v4();
    const currentExerciseID = initialState.masterExerciseList[0].exerciseID;
    action = {
      type: c.ADD_SET,
      addedSetExerciseID: currentExerciseID,
      addedSetID: addedSetID
    }
    expect(newWorkoutExerciseListReducer(initialState, action)).toEqual(
      {
        "masterExerciseList": [
          {
            "exerciseID": initialExerciseID,
            "exerciseName": "",
            "exerciseNumber": 1,
            "setList": [
              {
                "reps": "",
                "setID": initialSetID,
                "setNumber": 1,
                "weight": ""
              },
              {
                "reps": "",
                "setID": addedSetID,
                "setNumber": 2,
                "weight": ""
              }
            ]
          },
        ],
        "workoutDateInput": "",
        "workoutID": "",
        "workoutNotesInput": "",
        "workoutTitleInput": ""
      }
    );
  });

  test('Should successfully delete exercises and or also sets which are checked', () => {
    const startingState = {
      workoutID: '',
      workoutTitleInput: '',
      workoutDateInput: '',
      workoutNotesInput: '',
      masterExerciseList: [
        {
          exerciseID: '1234',
          exerciseNumber: 1,
          exerciseName: '',
          setList: [
            {
              setID: 'ABCD',
              setNumber: 1,
              weight: '',
              reps: ''
            },
            {
              setID: 'EFGH',
              setNumber: 1,
              weight: '',
              reps: ''
            }
          ]
        },
        {
          exerciseID: '5678',
          exerciseNumber: 2,
          exerciseName: '',
          setList: [
            {
              setID: 'IJKL',
              setNumber: 1,
              weight: '',
              reps: ''
            }
          ]
        }
      ]
    };
    const startingCheckboxState = {
      workoutCheckedList: [],
      exerciseCheckedList: ['5678'],
      setCheckedList: ['EFGH']
    }
    const resettedSetID = v4();
    action = {
      type: c.DELETE_CHECKED,
      checkboxCheckedLists: startingCheckboxState,
      resettedSetID: resettedSetID
    }
    expect(newWorkoutExerciseListReducer(startingState, action)).toEqual(
      {
        workoutID: '',
        workoutTitleInput: '',
        workoutDateInput: '',
        workoutNotesInput: '',
        masterExerciseList: [
          {
            exerciseID: '1234',
            exerciseNumber: 1,
            exerciseName: '',
            setList: [
              {
                setID: 'ABCD',
                setNumber: 1,
                weight: '',
                reps: ''
              }
            ]
          }
        ]
      }
    );
  });

  test('If all sets of current exercise are checked, should successfully delete all sets of current exercise and add one new starting set', () => {
    const startingState = {
      workoutID: '',
      workoutTitleInput: '',
      workoutDateInput: '',
      workoutNotesInput: '',
      masterExerciseList: [
        {
          exerciseID: initialExerciseID,
          exerciseNumber: 1,
          exerciseName: '',
          setList: [
            {
              setID: 'ABCD',
              setNumber: 1,
              weight: '',
              reps: ''
            },
            {
              setID: 'EFGH',
              setNumber: 1,
              weight: '',
              reps: ''
            }
          ]
        }
      ]
    };
    const startingCheckboxState = {
      workoutCheckedList: [],
      exerciseCheckedList: [],
      setCheckedList: ['ABCD', 'EFGH']
    }
    const resettedSetID = v4();
    action = {
      type: c.DELETE_CHECKED,
      checkboxCheckedLists: startingCheckboxState,
      resettedSetID: resettedSetID
    }
    expect(newWorkoutExerciseListReducer(startingState, action)).toEqual(
      {
        workoutID: '',
        workoutTitleInput: '',
        workoutDateInput: '',
        workoutNotesInput: '',
        masterExerciseList: [
          {
            exerciseID: initialExerciseID,
            exerciseNumber: 1,
            exerciseName: '',
            setList: [
              {
                setID: resettedSetID,
                setNumber: 1,
                weight: '',
                reps: ''
              }
            ]
          }
        ]
      }
    );
  });

  test('Should store workout input value', () => {
    action = {
      type: c.STORE_INPUT_VALUE,
      sectionName: 'workout',
      inputName: 'workoutTitleInput',
      inputValue: 'Title',
      inputTargetID: null,
      setExerciseID: null
    }
    expect(newWorkoutExerciseListReducer(initialState, action)).toEqual(
      {
        workoutID: '',
        workoutTitleInput: 'Title',
        workoutDateInput: '',
        workoutNotesInput: '',
        masterExerciseList: [
          {
            exerciseID: initialExerciseID,
            exerciseNumber: 1,
            exerciseName: '',
            setList: [
              {
                setID: initialSetID,
                setNumber: 1,
                weight: '',
                reps: ''
              }
            ]
          }
        ]
      }
    );
  });

  test('Should store exercise input value', () => {
    action = {
      type: c.STORE_INPUT_VALUE,
      sectionName: 'exercise',
      inputName: 'exerciseName',
      inputValue: 'Title',
      inputTargetID: initialExerciseID,
      setExerciseID: null
    }
    expect(newWorkoutExerciseListReducer(initialState, action)).toEqual(
      {
        workoutID: '',
        workoutTitleInput: '',
        workoutDateInput: '',
        workoutNotesInput: '',
        masterExerciseList: [
          {
            exerciseID: initialExerciseID,
            exerciseNumber: 1,
            exerciseName: 'Title',
            setList: [
              {
                setID: initialSetID,
                setNumber: 1,
                weight: '',
                reps: ''
              }
            ]
          }
        ]
      }
    );
  });

  test('Should store set input value', () => {
    action = {
      type: c.STORE_INPUT_VALUE,
      sectionName: 'set',
      inputName: 'weight',
      inputValue: '325',
      inputTargetID: initialSetID,
      setExerciseID: initialExerciseID
    }
    expect(newWorkoutExerciseListReducer(initialState, action)).toEqual(
      {
        workoutID: '',
        workoutTitleInput: '',
        workoutDateInput: '',
        workoutNotesInput: '',
        masterExerciseList: [
          {
            exerciseID: initialExerciseID,
            exerciseNumber: 1,
            exerciseName: '',
            setList: [
              {
                setID: initialSetID,
                setNumber: 1,
                weight: '325',
                reps: ''
              }
            ]
          }
        ]
      }
    );
  });

  test('Should successfully reset workout object content', () => {
    action = {
      type: c.RESET_WORKOUT_FORM,
      resettedExerciseID: 'ABCD',
      resettedSetID: 'EFGH'
    }
    expect(newWorkoutExerciseListReducer(initialState, action)).toEqual(
      {
        workoutID: '',
        workoutTitleInput: '',
        workoutDateInput: '',
        workoutNotesInput: '',
        masterExerciseList: [
          {
            exerciseID: 'ABCD',
            exerciseNumber: 1,
            exerciseName: '',
            setList: [
              {
                setID: 'EFGH',
                setNumber: 1,
                weight: '',
                reps: ''
              }
            ]
          }
        ]
      }
    );
  });

});
