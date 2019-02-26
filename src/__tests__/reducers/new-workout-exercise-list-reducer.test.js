import newWorkoutExerciseListReducer from './../../reducers/new-workout-exercise-list-reducer';

describe('newWorkoutExerciseListReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(newWorkoutExerciseListReducer({}, { type:null })).toEqual({});
  });

});
