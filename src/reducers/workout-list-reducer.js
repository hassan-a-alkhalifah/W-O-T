import constants from './../constants';
const { c } = constants;

export default (state = [], action) => {

  const { newWorkout, workoutToBeRemovedID, editedWorkout, editedWorkoutID } = action;

  switch(action.type) {
    case c.RECEIVE_WORKOUT: {
      return [...state, newWorkout];
    }
    case c.REMOVE_WORKOUT: {
      return [...state.filter((workout) => {
        return workout.workoutID !== workoutToBeRemovedID;
      })];
    }
    case c.EDIT_WORKOUT: {
      return [...state.map((workout) => {
        if(workout.workoutID === editedWorkoutID) {
          return editedWorkout;
        } else {
          return workout;
        }
      })];
    }
    default:
    return state;

  }
};
