import React from 'react';
import PropTypes from 'prop-types';
import noteIcon from '../assets/images/note-icon.png';
import addExerciseIcon from '../assets/images/add-exercise-icon.png';
import finishIcon from '../assets/images/finish-icon.png';
import disagreeIcon from '../assets/images/disagree-icon.png';
import ExerciseList from './ExerciseList';

function Workout(props) {

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
  }
  const workoutNotesInputStyles = {
    display: 'none',
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
    height: '40px'
  }

  return(
    <div style={workoutStyles}>
      <div style={workoutFormStyles}>
        <div style={workoutFormTopWrapperStyles}>
          <div style={workoutFormTopWrapperSpacerStyles}></div>
          <input type='text' placeholder='Enter Workout Title' name='workoutTitleInput' style={Object.assign({}, workoutInputStyles, workoutTitleInputStyles)}/>
          <img src={noteIcon} alt='Note Icon' style={noteIconStyles}/>
        </div>
        <input type='date' placeholder='date' name='dateInput' style={workoutInputStyles}/>
        <textArea rows='4' cols='27' placeholder='Enter Workout Notes' name='workoutNotesInput' style={workoutNotesInputStyles}></textArea>
      </div>
      <ExerciseList />
      <div style={addExerciseIconWrapperStyles}>
        <img src={addExerciseIcon} alt='Add Exercise Icon' style={addExerciseIconStyles}/>
      </div>
    </div>
  );
}

export default Workout;
