import { combineReducers } from 'redux';
import workoutListReducer from './workout-list-reducer';
import newWorkoutExerciseListReducer from './new-workout-exercise-list-reducer';
import checkboxCheckedListReducer from './checkbox-checked-list-reducer';
import workoutNotesReducer from './workout-notes-reducer';
import menuIconsReducer from './menu-icons-reducer';

const rootReducer = combineReducers({
  masterWorkoutList: workoutListReducer,
  newWorkoutMasterExerciseList: newWorkoutExerciseListReducer,
  checkboxCheckedLists: checkboxCheckedListReducer,
  workoutNotesState: workoutNotesReducer,
  menuIconsState: menuIconsReducer
});

export default rootReducer;
