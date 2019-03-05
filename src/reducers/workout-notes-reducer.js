import constants from './../constants';

const { c } = constants;
const initialState = {
  exerciseNotesShown: false
};

export default (state = initialState, action) => {

  switch(action.type) {
    case c.CHANGE_EXERCISE_DISPLAY: {
      if(state.exerciseNotesShown) {
        return {...state, exerciseNotesShown: false}
      } else {
        return {...state, exerciseNotesShown: true};
      }
    }
    default: {
      return state;
    }
  }

}
