import workoutListReducer from './../../reducers/workout-list-reducer';
import constants from './../../constants';

const { c } = constants;
let action;

describe('workoutListReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(workoutListReducer([], { type:null })).toEqual([]);
  });

  test('Should successfully add new workout', () => {
    const newWorkout = {
      workoutTitleInput: 'Chest',
      workoutDateInput: '2019-03-10',
      workoutNotesInput: '',
      workoutID: '1234',
      masterExerciseList: [
        {
          exerciseID: '11223344',
          exerciseNumber: 1,
          exerciseName: 'Bench Press',
          setList: [
            {
              setID: 'ABCD',
              setNumber: 1,
              weight: '255',
              reps: '10'
            },
            {
              setID: 'EFGH',
              setNumber: 2,
              weight: '255',
              reps: '10'
            },
            {
              setID: 'IJKL',
              setNumber: 3,
              weight: '255',
              reps: '10'
            }
          ]
        }
      ]
    };
    action = {
      type: c.RECEIVE_WORKOUT,
      newWorkout: newWorkout
    }
    expect(workoutListReducer([], action)).toEqual([
      {
        workoutTitleInput: 'Chest',
        workoutDateInput: '2019-03-10',
        workoutNotesInput: '',
        workoutID: '1234',
        masterExerciseList: [
          {
            exerciseID: '11223344',
            exerciseNumber: 1,
            exerciseName: 'Bench Press',
            setList: [
              {
                setID: 'ABCD',
                setNumber: 1,
                weight: '255',
                reps: '10'
              },
              {
                setID: 'EFGH',
                setNumber: 2,
                weight: '255',
                reps: '10'
              },
              {
                setID: 'IJKL',
                setNumber: 3,
                weight: '255',
                reps: '10'
              }
            ]
          }
        ]
      }
    ]);
  });

  test('Should successfully remove selected workout', () => {
    action = {
      type: c.REMOVE_WORKOUT,
      workoutToBeRemovedID: '5678'
    };
    const initialState = [
      {
        workoutTitleInput: 'Chest',
        workoutDateInput: '2019-03-10',
        workoutNotesInput: '',
        workoutID: '1234',
        masterExerciseList: [
          {
            exerciseID: '11223344',
            exerciseNumber: 1,
            exerciseName: 'Bench Press',
            setList: [
              {
                setID: 'ABCD',
                setNumber: 1,
                weight: '255',
                reps: '10'
              }
            ]
          }
        ]
      },
      {
        workoutTitleInput: 'Back',
        workoutDateInput: '2019-04-10',
        workoutNotesInput: '',
        workoutID: '5678',
        masterExerciseList: [
          {
            exerciseID: '55667788',
            exerciseNumber: 1,
            exerciseName: 'Barbell Row',
            setList: [
              {
                setID: 'EFGH',
                setNumber: 1,
                weight: '205',
                reps: '10'
              }
            ]
          }
        ]
      }
    ];
    expect(workoutListReducer(initialState, action)).toEqual(
      [
        {
          workoutTitleInput: 'Chest',
          workoutDateInput: '2019-03-10',
          workoutNotesInput: '',
          workoutID: '1234',
          masterExerciseList: [
            {
              exerciseID: '11223344',
              exerciseNumber: 1,
              exerciseName: 'Bench Press',
              setList: [
                {
                  setID: 'ABCD',
                  setNumber: 1,
                  weight: '255',
                  reps: '10'
                }
              ]
            }
          ]
        }
      ]
    );
  });

  test('Should successfully edit specified workout based on provided ID', () => {
    const editedWorkout = {
      workoutTitleInput: 'Back',
      workoutDateInput: '2019-04-10',
      workoutNotesInput: '',
      workoutID: '5678',
      masterExerciseList: [
        {
          exerciseID: '55667788',
          exerciseNumber: 1,
          exerciseName: 'Barbell Row',
          setList: [
            {
              setID: 'EFGH',
              setNumber: 1,
              weight: '205',
              reps: '10'
            },
            {
              setID: 'IJKL',
              setNumber: 2,
              weight: '205',
              reps: '10'
            }
          ]
        }
      ]
    };
    action = {
      type: c.EDIT_WORKOUT,
      editedWorkout: editedWorkout,
      editedWorkoutID: '5678'
    };
    const initialState = [
      {
        workoutTitleInput: 'Chest',
        workoutDateInput: '2019-03-10',
        workoutNotesInput: '',
        workoutID: '1234',
        masterExerciseList: [
          {
            exerciseID: '11223344',
            exerciseNumber: 1,
            exerciseName: 'Bench Press',
            setList: [
              {
                setID: 'ABCD',
                setNumber: 1,
                weight: '255',
                reps: '10'
              }
            ]
          }
        ]
      },
      {
        workoutTitleInput: 'Back',
        workoutDateInput: '2019-04-10',
        workoutNotesInput: '',
        workoutID: '5678',
        masterExerciseList: [
          {
            exerciseID: '55667788',
            exerciseNumber: 1,
            exerciseName: 'Barbell Row',
            setList: [
              {
                setID: 'EFGH',
                setNumber: 1,
                weight: '205',
                reps: '10'
              }
            ]
          }
        ]
      }
    ];
    expect(workoutListReducer(initialState, action)).toEqual(
      [
        {
          workoutTitleInput: 'Chest',
          workoutDateInput: '2019-03-10',
          workoutNotesInput: '',
          workoutID: '1234',
          masterExerciseList: [
            {
              exerciseID: '11223344',
              exerciseNumber: 1,
              exerciseName: 'Bench Press',
              setList: [
                {
                  setID: 'ABCD',
                  setNumber: 1,
                  weight: '255',
                  reps: '10'
                }
              ]
            }
          ]
        },
        {
          workoutTitleInput: 'Back',
          workoutDateInput: '2019-04-10',
          workoutNotesInput: '',
          workoutID: '5678',
          masterExerciseList: [
            {
              exerciseID: '55667788',
              exerciseNumber: 1,
              exerciseName: 'Barbell Row',
              setList: [
                {
                  setID: 'EFGH',
                  setNumber: 1,
                  weight: '205',
                  reps: '10'
                },
                {
                  setID: 'IJKL',
                  setNumber: 2,
                  weight: '205',
                  reps: '10'
                }
              ]
            }
          ]
        }
      ]
    );
  });

});
