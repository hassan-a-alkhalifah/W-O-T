import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Exercise from './Exercise';

function ExerciseList({ newExerciseList }) {

  const exerciseListStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '28px'
  }

  return(
    <div style={exerciseListStyles}>
      {
        newExerciseList.map((exercise) => {
          return(
            <Exercise
              key={exercise.exerciseID}
              exerciseID={exercise.exerciseID}
              exerciseName={exercise.exerciseName}
              setList={exercise.setList}
            />
          );
        })
      }
    </div>
  );
}

ExerciseList.propTypes = {
  newExerciseList: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    newExerciseList: state.newWorkoutMasterExerciseList.masterExerciseList
  }
}

export default connect(mapStateToProps)(ExerciseList);
