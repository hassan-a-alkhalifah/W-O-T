import React from 'react';
import PropTypes from 'prop-types';
import Exercise from './Exercise';

function ExerciseList({ masterExerciseList, onInputChange }) {

  const exerciseListStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '28px'
  }

  return(
    <div style={exerciseListStyles}>
      {
        masterExerciseList.forEach((exercise) => {
          return(
            <Exercise
              key={exercise.exerciseID}
              exerciseID={exercise.exerciseID}
              exerciseName={exercise.exerciseName}
              setList={exercise.setList}
              onInputChange={onInputChange}
            />
          );
        })
      }
    </div>
  );
}

ExerciseList.propTypes = {
  masterExerciseList: PropTypes.array,
  onInputChange: PropTypes.func
}

export default ExerciseList;
