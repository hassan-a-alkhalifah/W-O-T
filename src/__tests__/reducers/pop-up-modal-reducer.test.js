import popUpModalReducer from './../../reducers/pop-up-modal-reducer';
import constants from './../../constants';

const { c } = constants;
const initialState = {
  withoutSavingPopUpModalShown: false,
  finishedWorkoutPopUpModalShown: false
};
let action;

describe('popUpModalReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(popUpModalReducer(initialState, { type:null })).toEqual(initialState);
  });

  test('Should successfully change boolean value of target key', () => {
    action = {
      type: c.CHANGE_POP_UP_MODAL_STATE,
      popUpModalKey: 'finishedWorkoutPopUpModalShown'
    };
    expect(popUpModalReducer(initialState, action)).toEqual(
      {
        withoutSavingPopUpModalShown: false,
        finishedWorkoutPopUpModalShown: true
      }
    );
  });

});
