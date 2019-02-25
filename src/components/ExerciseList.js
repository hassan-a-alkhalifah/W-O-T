import React from 'react';
import PropTypes from 'prop-types';
import Exercise from './Exercise';

function ExerciseList(props) {

  const exerciseListStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '28px'
  }

  return(
    <div style={exerciseListStyles}>
      <Exercise />
    </div>
  );
}

export default ExerciseList;
