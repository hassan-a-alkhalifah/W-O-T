import { v4 } from 'uuid';
// import constants from './../constants';
// const { c } = constants;

const initialExerciseID = v4();
const initialSetID = v4();

const initialState = {
  workoutTitleInput: '',
  workoutDateInput: '',
  workoutNotesInput: '',
  masterExerciseList: [
    {
      exerciseID: initialExerciseID,
      exerciseNumber: 1,
      exerciseName: '',
      setList: [
        {
          setID: initialSetID,
          setNumber: 1,
          weight: '',
          reps: ''
        }
      ]
    }
  ]
}

export default (state = initialState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
};
