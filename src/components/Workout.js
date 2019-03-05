import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { addExercise, handleExerciseNotesDisplay, handleInputChange } from '../actions';
import noteIcon from '../assets/images/note-icon.png';
import addExerciseIcon from '../assets/images/add-exercise-icon.png';
import finishIcon from '../assets/images/finish-icon.png';
import disagreeIcon from '../assets/images/disagree-icon.png';
import ExerciseList from './ExerciseList';

function Workout({ dispatch, currentWorkoutNoOfExercise, workoutNotes }) {

  const workoutStyles = {
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
  let workoutNotesInput = null;
  if(workoutNotes) {
    workoutNotesInput =
    <textarea
      rows='4'
      cols='27'
      placeholder='Enter Workout Notes'
      name='workoutNotesInput'
      style={workoutNotesInputStyles}
      onChange={(event) => {
        dispatch(handleInputChange('workout', event.target.name, event.target.value));
      }}
    ></textarea>;
  }

  return(
    <div style={workoutStyles}>
      <div style={workoutFormStyles}>
        <div style={workoutFormTopWrapperStyles}>
          <div style={workoutFormTopWrapperSpacerStyles}></div>
          <input
            type='text'
            placeholder='Enter Workout Title'
            name='workoutTitleInput'
            style={Object.assign({}, workoutInputStyles, workoutTitleInputStyles)}
            onChange={(event) => {
              dispatch(handleInputChange('workout', event.target.name, event.target.value));
            }}
          />
          <img
            src={noteIcon}
            alt='Note Icon'
            style={noteIconStyles}
            onClick={() => {
              dispatch(handleExerciseNotesDisplay());
            }}
          />
        </div>
        <input
          type='date'
          placeholder='date'
          name='workoutDateInput'
          style={workoutInputStyles}
          onChange={(event) => {
            dispatch(handleInputChange('workout', event.target.name, event.target.value));
          }}
        />
      {workoutNotesInput}
      </div>
      <ExerciseList />
      <div style={addExerciseIconWrapperStyles}>
        <img
          src={addExerciseIcon}
          alt='Add Exercise Icon'
          style={addExerciseIconStyles}
          onClick={() => {
            const newExerciseID = v4();
            const newSetID = v4();
            dispatch(addExercise(newExerciseID, newSetID));
          }}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    workoutNotes: state.workoutNotes.exerciseNotesShown
  }
}

export default connect(mapStateToProps)(Workout);
