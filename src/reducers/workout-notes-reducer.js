import constants from './../constants';

const { c } = constants;
const initialState = {
  exerciseNotesShown: false
};

export default (state = initialState, action) => {

  switch(action.type) {
    case c.CHANGE_EXERCISE_DISPLAY: {
      let newState = null;
      state.exerciseNotesShown ? newState = {...state, exerciseNotesShown: false} : newState = {...state, exerciseNotesShown: true};
      return newState;
    }
    default: {
      return state;
    }
  }

}
