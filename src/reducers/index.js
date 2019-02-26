import { combineReducers } from 'redux';
import workoutListReducer from './workout-list-reducer';
import newWorkoutExerciseListReducer from './new-workout-exercise-list-reducer';

const rootReducer = combineReducers({
  masterWorkoutList: workoutListReducer,
  newWorkoutMasterExerciseList: newWorkoutExerciseListReducer
});

export default rootReducer;
