import pageCheckReducer from './../../reducers/page-check-reducer';
import constants from './../../constants';

const { c } = constants;
const initialState = {
  homeIcon: false,
  archiveIcon: true,
  finishIcon: true,
  deleteicon: false
};

describe('pageCheckReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(pageCheckReducer(initialState, { type:null})).toEqual(initialState);
  });

});
