import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { onAddExercise, onExerciseNotesDisplay, onInputChange, onResetWorkoutForm, onChangePageState, onAddWorkout, onChangePopUpModalState, onChangePageType, onAddEditedWorkout } from '../actions';
import noteIcon from '../assets/images/note-icon.png';
import onAddExerciseIcon from '../assets/images/add-exercise-icon.png';
import finishIcon from '../assets/images/finish-icon.png';
import disagreeIcon from '../assets/images/disagree-icon.png';
import ExerciseList from './ExerciseList';

function Workout({ dispatch, currentWorkoutNoOfExercise, workoutNotesState, workoutNotes, withoutSavingPopUpModalShown, finishedWorkoutPopUpModalShown, workoutTitleInput, workoutDateInput, workoutNotesInput, masterExerciseList, pageLink, ifEdit, selectedWorkoutToBeEditedID }) {

  const workoutStyles = {
    position: 'relative',
    paddingTop: '115px'
  }
  const workoutFormStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#454545',
    padding: '12px 0'
  }
  const workoutFormTopWrapperStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '12px'
  }
  const workoutFormTopWrapperSpacerStyles = {
    width: '36px',
    height: '24px'
  }
  const workoutInputStyles = {
    width: '185px',
    height: '34px',
    paddingLeft: '13px',
    border: 'none',
    fontSize: '14px'
  }
  const workoutTitleInputStyles = {
    marginRight: '12px',
  }
  const noteIconStyles = {
    width: '24px',
    height: '26px',
    cursor: 'pointer'
  }
  const workoutNotesInputStyles = {
    width: '172px',
    padding: '13px',
    marginTop: '12px',
    fontSize: '14px'
  }
  const addExerciseIconWrapperStyles = {
    width: '100%',
    textAlign: 'center',
    marginBottom: '75px'
  }
  const addExerciseIconStyles = {
    width: '40px',
    height: '40px',
    cursor: 'pointer'
  }

  const popUpModalStyles = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: '100',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(219, 219, 219, 0.5)'
  };
  const popUpModalSubWrapperStyles = {
    width: '265px',
    height: '130px',
    backgroundColor: '#FFF'
  };
  const popUpModalTextWrapperStyles = {
    paddingTop: '15px',
    marginBottom: '15px',
    textAlign: 'center'
  };
  const popUpModalButtonsContainerStyles = {
    display: 'flex',
    justifyContent: 'space-around'
  };
  const finishAndDisagreeIconStyles = {
    width: '25px',
    height: '25px',
    cursor: 'pointer'
  };

  let workoutNotesInputField = null;
  if(workoutNotesState) {
    workoutNotesInputField =
    <textarea
      rows='4'
      cols='27'
      placeholder='Enter Workout Notes'
      name='workoutNotesInput'
      style={workoutNotesInputStyles}
      onChange={(event) => {
        dispatch(onInputChange('workout', event.target.name, event.target.value));
      }}
      value={workoutNotes}
    ></textarea>;
  }

  let withoutSavingPopUpModal = null;
  if(withoutSavingPopUpModalShown) {
    withoutSavingPopUpModal =
    <div style={popUpModalStyles}>
        <div style={popUpModalSubWrapperStyles}>
          <div style={popUpModalTextWrapperStyles}>
            <p>Changes will not be saved</p>
            <p>Are you sure you would like to exit?</p>
          </div>
          <div style={popUpModalButtonsContainerStyles}>
            <Link to={pageLink}>
              <img
                src={finishIcon}
                alt="Agree Icon"
                style={finishAndDisagreeIconStyles}
                onClick={(event) => {
                  if(pageLink === '/') {
                    event.preventDefault();
                  }
                  const resettedExerciseID = v4();
                  const resettedSetID = v4();
                  dispatch(onResetWorkoutForm(resettedExerciseID, resettedSetID));
                  dispatch(onChangePageState());
                  dispatch(onChangePopUpModalState('withoutSavingPopUpModalShown'));
                  dispatch(onChangePageType('/', false));
                }}
              />
            </Link>
            <img
              src={disagreeIcon}
              alt="Disagree Icon"
              style={finishAndDisagreeIconStyles}
              onClick={() => {
                if(ifEdit) {
                  dispatch(onChangePageType('/', true));
                } else {
                  dispatch(onChangePageType('/', false));
                }
                dispatch(onChangePopUpModalState('withoutSavingPopUpModalShown'));
              }}
            />
          </div>
        </div>
      </div>;
  }

  let finishedWorkoutPopUpModal = null;
  if(finishedWorkoutPopUpModalShown) {
    finishedWorkoutPopUpModal =
    <div style={popUpModalStyles}>
        <div style={popUpModalSubWrapperStyles}>
          <div style={popUpModalTextWrapperStyles}>
            <p>Are you finished with the workout?</p>
          </div>
          <div style={popUpModalButtonsContainerStyles}>
            <img
              src={finishIcon}
              alt="Agree Icon"
              style={finishAndDisagreeIconStyles}
              onClick={() => {
                const resettedExerciseID = v4();
                const resettedSetID = v4();
                if(ifEdit) {
                  dispatch(onAddEditedWorkout(selectedWorkoutToBeEditedID, workoutTitleInput, workoutDateInput, workoutNotesInput, masterExerciseList));
                  dispatch(onChangePageType('/', false));
                } else {
                  dispatch(onAddWorkout(workoutTitleInput, workoutDateInput, workoutNotesInput, masterExerciseList));
                }
                dispatch(onResetWorkoutForm(resettedExerciseID, resettedSetID));
                dispatch(onChangePopUpModalState('finishedWorkoutPopUpModalShown'));
              }}
            />
            <img
              src={disagreeIcon}
              alt="Disagree Icon"
              style={finishAndDisagreeIconStyles}
              onClick={() => {
                dispatch(onChangePopUpModalState('finishedWorkoutPopUpModalShown'));
              }}
            />
          </div>
        </div>
      </div>;
  }


  return(
    <div style={workoutStyles}>
      {withoutSavingPopUpModal}
      {finishedWorkoutPopUpModal}
      <div style={workoutFormStyles}>
        <div style={workoutFormTopWrapperStyles}>
          <div style={workoutFormTopWrapperSpacerStyles}></div>
          <input
            type='text'
            placeholder='Enter Workout Title'
            name='workoutTitleInput'
            style={Object.assign({}, workoutInputStyles, workoutTitleInputStyles)}
            onChange={(event) => {
              dispatch(onInputChange('workout', event.target.name, event.target.value));
            }}
            value={workoutTitleInput}
          />
          <img
            src={noteIcon}
            alt='Note Icon'
            style={noteIconStyles}
            onClick={() => {
              dispatch(onExerciseNotesDisplay());
            }}
          />
        </div>
        <input
          type='date'
          placeholder='date'
          name='workoutDateInput'
          style={workoutInputStyles}
          onChange={(event) => {
            dispatch(onInputChange('workout', event.target.name, event.target.value));
          }}
          value={workoutDateInput}
        />
      {workoutNotesInputField}
      </div>
      <ExerciseList />
      <div style={addExerciseIconWrapperStyles}>
        <img
          src={onAddExerciseIcon}
          alt='Add Exercise Icon'
          style={addExerciseIconStyles}
          onClick={() => {
            const newExerciseID = v4();
            const newSetID = v4();
            dispatch(onAddExercise(newExerciseID, newSetID));
          }}
        />
      </div>
    </div>
  );
}

Workout.propTypes = {
  dispatch: PropTypes.func,
  currentWorkoutNoOfExercise: PropTypes.number,
  workoutNotesState: PropTypes.bool,
  workoutNotes: PropTypes.string,
  withoutSavingPopUpModalShown: PropTypes.bool,
  finishedWorkoutPopUpModalShown: PropTypes.bool,
  homepage: PropTypes.bool,
  archivePage: PropTypes.bool,
  workoutTitleInput: PropTypes.string,
  workoutDateInput: PropTypes.string,
  workoutNotesInput: PropTypes.string,
  masterExerciseList: PropTypes.array,
  pageLink: PropTypes.string,
  ifEdit: PropTypes.bool,
  selectedWorkoutToBeEditedID: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    workoutNotesState: state.workoutNotesState.exerciseNotesShown,
    workoutNotes: state.newWorkoutMasterExerciseList.workoutNotesInput,
    withoutSavingPopUpModalShown: state.popUpModalStateList.withoutSavingPopUpModalShown,
    finishedWorkoutPopUpModalShown: state.popUpModalStateList.finishedWorkoutPopUpModalShown,
    homePage: state.pagesState.homePage,
    archivePage: state.pagesState.archivePage,
    workoutTitleInput: state.newWorkoutMasterExerciseList.workoutTitleInput,
    workoutDateInput: state.newWorkoutMasterExerciseList.workoutDateInput,
    workoutNotesInput: state.newWorkoutMasterExerciseList.workoutNotesInput,
    masterExerciseList: state.newWorkoutMasterExerciseList.masterExerciseList,
    pageLink: state.pagesState.pageType,
    ifEdit: state.pagesState.ifEdit,
    selectedWorkoutToBeEditedID: state.newWorkoutMasterExerciseList.workoutID
  }
}

export default connect(mapStateToProps)(Workout);
