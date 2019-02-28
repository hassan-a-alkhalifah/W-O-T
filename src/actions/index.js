import constants from './../constants';
const { c } = constants;

export const addExercise = (newExerciseID, newSetID) => ({
  type: c.ADD_EXERCISE,
  newExerciseID : newExerciseID,
  newSetID: newSetID
})
