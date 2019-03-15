import constants from './../constants';
const { c } = constants;

export default (state = [], action) => {

  const { newWorkout, workoutToBeRemovedID } = action;

  switch(action.type) {
    case c.RECEIVE_WORKOUT: {
      return [...state, newWorkout];
    }
    case c.REMOVE_WORKOUT: {
      return [...state.filter((workout) => {
        return workout.workoutID !== workoutToBeRemovedID;
      })];
    }
    default:
    return state;

  }
};
