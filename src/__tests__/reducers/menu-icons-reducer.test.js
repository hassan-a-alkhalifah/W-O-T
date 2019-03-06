import menuIconsReducer from './../../reducers/menu-icons-reducer';
import constants from './../../constants';

const { c } = constants;
const initialState = {
  homeIcon: false,
  archiveIcon: true,
  finishIcon: true,
  deleteicon: false
};

describe('menuIconsReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(menuIconsReducer(initialState, { type:null})).toEqual(initialState);
  });

});
