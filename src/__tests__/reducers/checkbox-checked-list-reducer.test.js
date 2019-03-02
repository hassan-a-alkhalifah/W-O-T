import checkboxCheckedListReducer from './../../reducers/checkbox-checked-list-reducer';
import constants from './../../constants';

const { c } = constants;
const initialState = {
  workoutCheckedList: [],
  exerciseCheckedList: [],
  setCheckedList: []
}

describe('checkboxCheckedListReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(checkboxCheckedListReducer(initialState, { type: null })).toEqual(initialState);
  });

});
