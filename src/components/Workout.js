import React from 'react';
import PropTypes from 'prop-types';
import noteIcon from '../assets/images/note-icon.png';
import addExerciseIcon from '../assets/images/add-exercise-icon.png';
import finishIcon from '../assets/images/finish-icon.png';
import disagreeIcon from '../assets/images/disagree-icon.png';
import ExerciseList from './ExerciseList';

function Workout(props) {
  return(
    <div>
      <div>
        <div>
          <div></div>
          <input type='text' placeholder='Enter Workout Title' name='workoutTitleInput'/>
          <img src={noteIcon} alt='Note Icon'/>
        </div>
        <input type='date' placeholder='date' name='dateInput'/>
        <textArea rows='4' cols='27' placeholder='Enter Workout Notes' name='workoutNotesInput'></textArea>
      </div>
      <ExerciseList />
      <div>
        <img src={addExerciseIcon} alt='Add Exercise Icon'/>
      </div>
    </div>
  );
}

export default Workout;
