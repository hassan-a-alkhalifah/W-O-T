import constants from './../constants';

const { c } = constants;
const initialState = {
  workoutCheckedList: [],
  exerciseCheckedList: [],
  setCheckedList: []
}

export default (state = initialState, action) => {

  const { ifChecked, whichInputTypeChecked, inputID } = action;

  switch(action.type) {
    case c.ADD_CHECKED_CHECKBOX_ID: {
      if(ifChecked) {
        return {...state, [whichInputTypeChecked]: state[whichInputTypeChecked].concat(inputID)};
      } else {
        return {...state, [whichInputTypeChecked]: state[whichInputTypeChecked].filter((id)=>id !== inputID)};
      }
    }
    case c.EMPTY_CHECKED_LISTS: {
      return {...state, workoutCheckedList: [], exerciseCheckedList: [], setCheckedList: []};
    }
    default: {
      return state;
    }
  }

}
