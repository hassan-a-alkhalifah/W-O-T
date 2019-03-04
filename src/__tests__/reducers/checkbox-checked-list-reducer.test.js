import checkboxCheckedListReducer from './../../reducers/checkbox-checked-list-reducer';
import constants from './../../constants';

const { c } = constants;
const initialState = {
  workoutCheckedList: [],
  exerciseCheckedList: [],
  setCheckedList: []
}
let action;

describe('checkboxCheckedListReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(checkboxCheckedListReducer(initialState, { type: null })).toEqual(initialState);
  });

  test('Should add ID of input type if checked to input type array list', () => {
    action = {
      type: c.ADD_CHECKED_CHECKBOX_ID,
      ifChecked: true,
      whichInputTypeChecked: 'exerciseCheckedList',
      inputID: '1234'
    }
    expect(checkboxCheckedListReducer(initialState, action)).toEqual(
      {
        workoutCheckedList: [],
        exerciseCheckedList: ['1234'],
        setCheckedList: []
      }
    );
  });

  test('Should remove ID of input type if unchecked from input type array list', () => {
    action = {
      type: c.ADD_CHECKED_CHECKBOX_ID,
      ifChecked: false,
      whichInputTypeChecked: 'exerciseCheckedList',
      inputID: '1234'
    }
    expect(checkboxCheckedListReducer(initialState, action)).toEqual(
      {
        workoutCheckedList: [],
        exerciseCheckedList: [],
        setCheckedList: []
      }
    );
  });

  test('Should empty all checked list arrays', () => {
    const currentState = {
      workoutCheckedList: ['1234'],
      exerciseCheckedList: ['5678'],
      setCheckedList: ['9101112']
    };
    action = {
      type: c.EMPTY_CHECKED_LISTS
    }
    expect(checkboxCheckedListReducer(currentState, action)).toEqual(
      {
        workoutCheckedList: [],
        exerciseCheckedList: [],
        setCheckedList: []
      }
    );
  });

});
