import constants from './../constants';

const { c } = constants;
const initialState = {
  homeIcon: false,
  archiveIcon: true,
  finishIcon: true
};

export default (state = initialState, action) => {

  switch(action.type) {
    case c.ICON_STATE_CHANGE: {
      return state;
    }
    default: {
      return state;
    }
  }

}
