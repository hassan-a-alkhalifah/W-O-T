import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Exercise from './Exercise';

function ExerciseList({ newExerciseList, noOfExercises }) {

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
              noOfExercises={noOfExercises}
            />
          );
        })
      }
    </div>
  );
}

ExerciseList.propTypes = {
  newExerciseList: PropTypes.array,
  noOfExercises: PropTypes.number
}

const mapStateToProps = (state) => {
  return {
    newExerciseList: state.newWorkoutMasterExerciseList.masterExerciseList,
    noOfExercises: state.newWorkoutMasterExerciseList.masterExerciseList.length
  }
}

export default connect(mapStateToProps)(ExerciseList);
