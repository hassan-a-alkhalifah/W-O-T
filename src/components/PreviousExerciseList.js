import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PreviousExercise from './PreviousExercise';

function PreviousExerciseList({ masterWorkoutList }) {
  return(
    <div>
      {
        masterWorkoutList.map((workout) => {
          let date = new Date(workout.workoutDateInput);
          let year = date.getFullYear();
          let month = ('0' + (date.getMonth() + 1)).slice(-2);
          let day = ('0' + date.getDate()).slice(-2);
          const formattedDate = year +'-'+day+'-'+month;
          return (
            <PreviousExercise
              key={workout.workoutID}
              workoutTitle={workout.workoutTitleInput}
              workoutDate={workout.workoutDateInput}
              workoutFormattedDate={formattedDate}
              workoutID={workout.workoutID}
              workoutNotes={workout.workoutNotesInput}
              workoutMasterExerciseList={workout.masterExerciseList}
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
