import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PreviousExercise from './PreviousExercise';

function PreviousExerciseList({ masterWorkoutList }) {
  return(
    <div>
      {
        masterWorkoutList.map((workout) => {
          return (
            <PreviousExercise
              key={workout.workoutID}
              workoutTitle={workout.workoutTitleInput}
              workoutDate={workout.workoutDateInput}
            />
          );
        })
      }
    </div>
  );
}

PreviousExerciseList.propTypes = {
  masterWorkoutList: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    masterWorkoutList: state.masterWorkoutList
  };
};

export default connect(mapStateToProps)(PreviousExerciseList);
