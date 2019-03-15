import React from 'react';
import PreviousExerciseList from './PreviousExerciseList';

function ExerciseArchive() {

  const exerciseArchivesStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '145px 0 28px 0'
  };
  const exerciseArchivesTitleStyles = {
    fontSize: '30px',
    marginBottom: '28px'
  };

  return(
    <div style={exerciseArchivesStyles}>
      <div style={exerciseArchivesTitleStyles}>Workout Archive</div>
      <PreviousExerciseList />
    </div>
  );
}

export default ExerciseArchive;
