import constants from './../constants';
const { c } = constants;

export default (state = [], action) => {

  const { newWorkout } = action;

  switch(action.type) {
    case c.RECEIVE_WORKOUT: {
      return [...state, newWorkout];
    }
    default:
    return state;

  }
};
