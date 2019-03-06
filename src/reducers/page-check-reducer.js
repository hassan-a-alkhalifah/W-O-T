import constants from './../constants';

const { c } = constants;
const initialState = {
  homePage: true,
  archivePage: false
};

export default (state = initialState, action) => {

  switch(action.type) {
    case c.PAGE_STATE_CHANGE: {
      return state;
    }
    default: {
      return state;
    }
  }

}
