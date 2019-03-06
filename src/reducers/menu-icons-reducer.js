import constants from './../constants';

const { c } = constants;
const initialState = {
  homeIcon: false,
  archiveIcon: true,
  finishIcon: true,
  deleteicon: false
};

export default (state = initialState, action) => {

  switch(action.type) {
    default: {
      return state;
    }
  }

}
