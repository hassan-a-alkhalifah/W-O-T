import pageCheckReducer from './../../reducers/page-check-reducer';
import constants from './../../constants';

const { c } = constants;
const initialState = {
  homePage: true,
  archivePage: false,
  pageType: '/'
};
let action;

describe('pageCheckReducer', () => {

  test('Should successfully return default state if no action type is recognized', () => {
    expect(pageCheckReducer(initialState, { type:null})).toEqual(initialState);
  });

  test('Should successfully change state boolean values', () => {
    action = {
      type: c.CHANGE_PAGE_STATE
    }
    expect(pageCheckReducer(initialState, action)).toEqual(
      {
        homePage: true,
        archivePage: false,
        pageType: '/'
      }
    );
  });

  test('Successfully change pageType', () => {
    action = {
      type: c.CHANGE_PAGE_TYPE,
      pageType: '/exerciseArchive'
    };
    expect(pageCheckReducer(initialState, action)).toEqual(
      {
        homePage: true,
        archivePage: false,
        pageType: '/exerciseArchive'
      }
    );
  });

});
