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

  const { newExerciseID, newSetID, addedSetExerciseID, addedSetID, checkboxCheckedLists, sectionName, inputName, inputValue, inputTargetID, setExerciseID } = action;

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
        masterExerciseList: [...newMasterExerciseList]
      });
      return newState;
    }

    case c.ADD_SET: {
      const newMasterExerciseList = state.masterExerciseList.map((exercise) => {
        if(exercise.exerciseID === addedSetExerciseID) {
          const nextSetPos = exercise.setList.length + 1;
          const newSet = {
            setID: addedSetID,
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
      const newState = Object.assign({}, state, {
        masterExerciseList: [...newMasterExerciseList]
      });
      return newState;
    }

    case c.DELETE_CHECKED: {
      let newMasterExerciseList = state.masterExerciseList.filter((exercise) => {
        if(!checkboxCheckedLists.exerciseCheckedList.includes(exercise.exerciseID)) {
          return exercise
        }
      });
      newMasterExerciseList = newMasterExerciseList.map((exercise) => {
        const newSetList = exercise.setList.filter((set) => {
          if(!checkboxCheckedLists.setCheckedList.includes(set.setID)) {
            return set;
          }
        });
        let newExercise = Object.assign({}, exercise, {
          setList: [...newSetList]
        });
        return newExercise;
      });
      const newState = Object.assign({}, state, {
        masterExerciseList: [...newMasterExerciseList]
      });
      return newState;
    }
    
    case c.STORE_INPUT_VALUE: {
      if(sectionName === 'workout') {
         return {...state, [inputName]: inputValue};
      } else if(sectionName === 'exercise') {
        return {...state, masterExerciseList: state.masterExerciseList.map((exercise) => {
          if(exercise.exerciseID === inputTargetID) {
            return {...exercise, [inputName]: inputValue};
          } else {
            return exercise;
          }
        })}
      } else {
        return {...state, masterExerciseList: state.masterExerciseList.map((exercise) => {
          if(exercise.exerciseID === setExerciseID) {
            return {...exercise, setList: exercise.setList.map((set) => {
              if(set.setID === inputTargetID) {
                return {...set, [inputName]: inputValue};
              } else {
                return set;
              }
            })};
          } else {
            return exercise;
          }
        })}
      }
    }

    default:
      return state;
  }
};
