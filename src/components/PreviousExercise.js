import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { onAddCheckedCheckboxID, onInputChange } from '../actions';

function PreviousExercise({ workoutTitle, workoutDate, workoutID, dispatch }) {

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
        <input
          type="checkbox"
          onChange={(event) => {
            dispatch(onAddCheckedCheckboxID(event.target.checked, 'workoutCheckedList', workoutID));
          }}
        />
        <span></span>
      </label>
    </div>
  );

}

PreviousExercise.propTypes = {
  workoutTitle: PropTypes.string,
  workoutDate: PropTypes.string,
  workoutID: PropTypes.string,
  dispatch: PropTypes.func
}

export default connect()(PreviousExercise);
