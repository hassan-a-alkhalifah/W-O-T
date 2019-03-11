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
      masterExerciseList: [
        {
          exerciseID: '1234',
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
        masterExerciseList: [
          {
            exerciseID: '1234',
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

});
