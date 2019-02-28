import newWorkoutExerciseListReducer from './../../reducers/new-workout-exercise-list-reducer';
import { v4 } from 'uuid';
import constants from './../../constants';

const { c } = constants;
const initialExerciseID = v4();
const initialSetID = v4();
const initialState = {
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
        "workoutNotesInput": "",
        "workoutTitleInput": ""
      }
    );
  });

});
