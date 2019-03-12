import { combineReducers } from 'redux';
import workoutListReducer from './workout-list-reducer';
import newWorkoutExerciseListReducer from './new-workout-exercise-list-reducer';
import checkboxCheckedListReducer from './checkbox-checked-list-reducer';
import workoutNotesReducer from './workout-notes-reducer';
import pageCheckReducer from './page-check-reducer';
import popUpModalReducer from './pop-up-modal-reducer';

const rootReducer = combineReducers({
  masterWorkoutList: workoutListReducer,
  newWorkoutMasterExerciseList: newWorkoutExerciseListReducer,
  checkboxCheckedLists: checkboxCheckedListReducer,
  workoutNotesState: workoutNotesReducer,
  pagesState: pageCheckReducer,
  popUpModalStateList: popUpModalReducer
});

export default rootReducer;
