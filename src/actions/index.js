import constants from './../constants';
const { c } = constants;

export const addExercise = (newExerciseID, newSetID) => ({
  type: c.ADD_EXERCISE,
  newExerciseID: newExerciseID,
  newSetID: newSetID
});

export const addSet = (addedSetExerciseID, addedSetID) => ({
  type: c.ADD_SET,
  addedSetExerciseID: addedSetExerciseID,
  addedSetID: addedSetID
});

export const addCheckedCheckboxID = (ifChecked, whichInputTypeChecked, inputID) => ({
  type: c.ADD_CHECKED_CHECKBOX_ID,
  ifChecked: ifChecked,
  whichInputTypeChecked: whichInputTypeChecked,
  inputID: inputID
});

export const deleteChecked = (checkboxCheckedLists) => ({
  type: c.DELETE_CHECKED,
  checkboxCheckedLists: checkboxCheckedLists
});

export const handleExerciseNotesDisplay = () => ({
  type: c.CHANGE_EXERCISE_DISPLAY
});

export const handleEmptyCheckedLists = () => ({
  type: c.EMPTY_CHECKED_LISTS
});

export const handleInputChange = (sectionName, inputName, inputValue, inputTargetID, setExerciseID) => ({
  type: c.STORE_INPUT_VALUE,
  sectionName: sectionName,
  inputName: inputName,
  inputValue: inputValue,
  inputTargetID: inputTargetID,
  setExerciseID: setExerciseID
});
