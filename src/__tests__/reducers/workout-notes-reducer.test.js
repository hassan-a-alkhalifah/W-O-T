import workoutNotedReducer from './../../reducers/workout-notes-reducer';
import constants from './../../constants';

const { c } = constants;
const initialState = {
  exerciseNotesShown: false
};
let action;

describe('workoutNotedReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(workoutNotedReducer(initialState, { type:null })).toEqual(initialState);
  });

  test('Should change exerciseNotesShown boolean value', () => {
    action = {
      type: c.CHANGE_EXERCISE_DISPLAY
    }
    expect(workoutNotedReducer(initialState, action)).toEqual(
      {
        exerciseNotesShown: true
      }
    );
  });

});
