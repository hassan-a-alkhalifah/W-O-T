import constants from './../constants';
const { c } = constants;

export const onAddExercise = (newExerciseID, newSetID) => ({
  type: c.ADD_EXERCISE,
  newExerciseID: newExerciseID,
  newSetID: newSetID
});

export const onAddSet = (addedSetExerciseID, addedSetID) => ({
  type: c.ADD_SET,
  addedSetExerciseID: addedSetExerciseID,
  addedSetID: addedSetID
});

export const onAddCheckedCheckboxID = (ifChecked, whichInputTypeChecked, inputID) => ({
  type: c.ADD_CHECKED_CHECKBOX_ID,
  ifChecked: ifChecked,
  whichInputTypeChecked: whichInputTypeChecked,
  inputID: inputID
});

export const onDeleteChecked = (checkboxCheckedLists) => ({
  type: c.DELETE_CHECKED,
  checkboxCheckedLists: checkboxCheckedLists
});

export const onExerciseNotesDisplay = () => ({
  type: c.CHANGE_EXERCISE_DISPLAY
});

export const onEmptyCheckedLists = () => ({
  type: c.EMPTY_CHECKED_LISTS
});

export const onInputChange = (sectionName, inputName, inputValue, inputTargetID, setExerciseID) => ({
  type: c.STORE_INPUT_VALUE,
  sectionName: sectionName,
  inputName: inputName,
  inputValue: inputValue,
  inputTargetID: inputTargetID,
  setExerciseID: setExerciseID
});
