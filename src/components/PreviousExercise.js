import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PreviousExercise({ workoutTitle, workoutDate }) {

  const previousExerciseStyles = {
    display: 'flex',
    fontSize: '20px',
    marginBottom: '10px'
  };
  const workoutSpacerStyles = {
    width: '31px',
    height: '13px'
  };
  const dateWorkoutTitleContainerStyles = {
    display: 'flex',
    color: '#000'
  };
  const dateStyles = {
    marginRight: '12px'
  };
  const workoutCheckboxStyles = {
    marginLeft: '12px'
  };

  return(
    <div style={previousExerciseStyles}>
      <div style={workoutSpacerStyles}></div>
      <Link to="/">
        <div style={dateWorkoutTitleContainerStyles}>
          <p style={dateStyles}>{workoutDate}</p>
          <p>{workoutTitle}</p>
        </div>
      </Link>
      <label className='checkbox' style={workoutCheckboxStyles}>
        <input type="checkbox"/>
        <span></span>
      </label>
    </div>
  );

}

PreviousExercise.propTypes = {
  workoutTitle: PropTypes.string,
  workoutDate: PropTypes.string
}

export default PreviousExercise;
