import { v4 } from 'uuid';
import constants from './../constants';

const { c } = constants;
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
};

export default (state = initialState, action) => {

  const { newExerciseID, newSetID, addedSetExerciseID } = action;

  switch(action.type) {
    case c.ADD_EXERCISE: {
      const nextExercisePos = state.masterExerciseList.length + 1;
      const newExercise = {
        exerciseID: newExerciseID,
        exerciseNumber: nextExercisePos,
        exerciseName: '',
        setList: [
          {
            setID: newSetID,
            setNumber: 1,
            weight: '',
            reps: ''
          }
        ]
      }
      const newMasterExerciseList = [...state.masterExerciseList, newExercise];
      const newState = Object.assign({}, state, {
        masterExerciseList: newMasterExerciseList
      });
      return newState;
    }
    case c.ADD_SET: {
      const newMasterExerciseList = state.masterExerciseList.map((exercise) => {
        if(exercise.exerciseID === addedSetExerciseID) {
          const nextSetPos = exercise.setList.length + 1;
          const newSet = {
            setID: v4(),
            setNumber: nextSetPos,
            weight: '',
            reps: ''
          }
          const newSetList = [...exercise.setList, newSet];
          exercise = Object.assign({}, exercise, {
            setList: newSetList
          });
        }
        return exercise;
      });
      console.log(newMasterExerciseList);
      const newState = Object.assign({}, state, {
        masterExerciseList: newMasterExerciseList
      });
      return newState;
    }
    default:
      return state;
  }
};
