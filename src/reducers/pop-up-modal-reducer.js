import constants from './../constants';

const { c } = constants;
const initialState = {
  withoutSavingPopUpModalShown: false,
  finishedWorkoutPopUpModalShown: false
};

export default (state = initialState, action) => {

  const { popUpModalKey } = action;

  switch(action.type) {
    case c.CHANGE_POP_UP_MODAL_STATE: {
      console.log(popUpModalKey);
      return {...state, [popUpModalKey]: state[popUpModalKey] ? false : true};
    }
    default: {
      return state;
    }
  }

}
