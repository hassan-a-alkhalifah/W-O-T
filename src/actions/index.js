import constants from './../constants';
import * as firebase from 'firebase/app';
import 'firebase/database';

const { c, firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);
const masterWorkoutList = firebase.database().ref('masterWorkoutList');

export function onAddWorkout(workoutTitleInput, workoutDateInput, workoutNotesInput, masterExerciseList) {
  return () => masterWorkoutList.push({
    workoutTitleInput: workoutTitleInput,
    workoutDateInput: workoutDateInput,
    workoutNotesInput: workoutNotesInput,
    masterExerciseList: masterExerciseList
  });
};

export function onDeleteWorkout(workoutCheckedList) {
  return () => {
    workoutCheckedList.map((checkedWorkoutID) => {
      masterWorkoutList.child(checkedWorkoutID).remove();
    });
    return masterWorkoutList;
  };
};

export function onAddEditedWorkout(selectedWorkoutToBeEditedID, workoutTitleInput, workoutDateInput, workoutNotesInput, masterExerciseList) {
  return () => {
    return masterWorkoutList.child(selectedWorkoutToBeEditedID).update({
      workoutTitleInput: workoutTitleInput,
      workoutDateInput: workoutDateInput,
      workoutNotesInput: workoutNotesInput,
      masterExerciseList: masterExerciseList
    });
  };
};

export function watchFirebaseAddWorkout() {
  return function(dispatch) {
    masterWorkoutList.on('child_added', workout => {
      const newWorkout = Object.assign({}, workout.val(), {
        workoutID: workout.key
      });
      dispatch(onReceiveWorkout(newWorkout));
    });
  };
};

export function watchFirebaseDeleteWorkout() {
  return function(dispatch) {
    masterWorkoutList.on('child_removed', workout => {
      dispatch(onRemoveWorkout(workout.key));
    });
  };
};

export function watchFirebaseEditWorkout() {
  return function(dispatch) {
    masterWorkoutList.on('child_changed', workout => {
      const editedWorkout = Object.assign({}, workout.val(), {
        workoutID: workout.key
      });
      dispatch(onEditWorkout(editedWorkout, editedWorkout.workoutID));
    });
  };
};

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

export const onDeleteChecked = (checkboxCheckedLists, resettedExerciseID, resettedSetID) => ({
  type: c.DELETE_CHECKED,
  checkboxCheckedLists: checkboxCheckedLists,
  resettedExerciseID: resettedExerciseID,
  resettedSetID: resettedSetID
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

export const pageStateChange = () => ({
  type: c.PAGE_STATE_CHANGE
});

export const onResetWorkoutForm = (resettedExerciseID, resettedSetID) => ({
  type: c.RESET_WORKOUT_FORM,
  resettedExerciseID: resettedExerciseID,
  resettedSetID: resettedSetID
});

export const onChangePageState = () => ({
  type: c.CHANGE_PAGE_STATE
});

export const onChangePageType = (pageType, ifEdit) => ({
  type: c.CHANGE_PAGE_TYPE,
  pageType: pageType,
  ifEdit: ifEdit
});

export const onReceiveWorkout = (newWorkout) => ({
  type: c.RECEIVE_WORKOUT,
  newWorkout: newWorkout
});

export const onRemoveWorkout = (workoutToBeRemovedID) => ({
  type: c.REMOVE_WORKOUT,
  workoutToBeRemovedID: workoutToBeRemovedID

});

export const onChangePopUpModalState = (popUpModalKey) => ({
  type: c.CHANGE_POP_UP_MODAL_STATE,
  popUpModalKey: popUpModalKey
});

export const onAutoFillingEditForm = (workoutID, workoutTitle, workoutDate, workoutNotes, workoutMasterExerciseList) => ({
  type: c.AUTO_FILL_EDIT_FORM,
  workoutID: workoutID,
  workoutTitle: workoutTitle,
  workoutDate: workoutDate,
  workoutNotes: workoutNotes,
  workoutMasterExerciseList: workoutMasterExerciseList
});

export const onEditWorkout = (editedWorkout, editedWorkoutID) => ({
  type: c.EDIT_WORKOUT,
  editedWorkout: editedWorkout,
  editedWorkoutID: editedWorkoutID
});
