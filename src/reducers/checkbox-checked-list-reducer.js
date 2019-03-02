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
      let newState = null;
      if(ifChecked) {
        if(!state[whichInputTypeChecked].includes(inputID)) {
          newState = Object.assign({}, state, {
            [whichInputTypeChecked]: [...state[whichInputTypeChecked], inputID]
          });
          return newState;
        } else {
          return state;
        }
      } else {
        newState = Object.assign({}, state, {
          [whichInputTypeChecked]: state[whichInputTypeChecked].filter((id)=>id !== inputID)
        });
        return newState;
      }
    }
    default: {
      return state;
    }
  }

}
