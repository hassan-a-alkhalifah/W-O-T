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

  const { newExerciseID, newSetID, addedSetExerciseID, addedSetID, checkboxCheckedLists, sectionName, inputName, inputValue, inputTargetID, setExerciseID, resettedExerciseID, resettedSetID } = action;

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
      };
      return {...state, masterExerciseList: state.masterExerciseList.concat(newExercise)};
    }
    case c.ADD_SET: {
      return {...state, masterExerciseList: state.masterExerciseList.map((exercise) => {
        if(exercise.exerciseID === addedSetExerciseID) {
          const nextSetPos = exercise.setList.length + 1;
          const newSet = {
            setID: addedSetID,
            setNumber: nextSetPos,
            weight: '',
            reps: ''
          }
          return {...exercise, setList: exercise.setList.concat(newSet)};
        } else {
          return exercise;
        }
      })};
    }
    case c.DELETE_CHECKED: {
      const newMasterExerciseList = state.masterExerciseList.filter((exercise) => {
        return !checkboxCheckedLists.exerciseCheckedList.includes(exercise.exerciseID);
      });
      return {...state, masterExerciseList: newMasterExerciseList.map((exercise) => {
        const currentExerciseSetIDsList = exercise.setList.map((set) => {
          return set.setID;
        });
        const currentExerciseSetIDsCheckedList = currentExerciseSetIDsList.filter((setID) => {
          return checkboxCheckedLists.setCheckedList.includes(setID);
        });
        const noOfCurrentExerciseSetIDsChecked = currentExerciseSetIDsCheckedList.length;
        const noOfCurrentExerciseSets = exercise.setList.length;
        if(noOfCurrentExerciseSetIDsChecked === noOfCurrentExerciseSets) {
          return {...exercise, setList: [
            {
              setID: resettedSetID,
              setNumber: 1,
              weight: '',
              reps: ''
            }
          ]};
        } else {
          return {...exercise, setList: exercise.setList.filter((set) => {
            return !checkboxCheckedLists.setCheckedList.includes(set.setID);
          })};
        }
      })};
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
    case c.RESET_WORKOUT_FORM: {
      return {
        ...state,
        workoutTitleInput: '',
        workoutDateInput: '',
        workoutNotesInput: '',
        masterExerciseList: [
          {
            exerciseID: resettedExerciseID,
            exerciseNumber: 1,
            exerciseName: '',
            setList: [
              {
                setID: resettedSetID,
                setNumber: 1,
                weight: '',
                reps: ''
              }
            ]
          }
        ]
      };
    }
    default:
      return state;
  }
};
