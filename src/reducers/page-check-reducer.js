import constants from './../constants';

const { c } = constants;
const initialState = {
  homePage: true,
  archivePage: false
};

export default (state = initialState, action) => {

  const { pageType } = action;

  switch(action.type) {
    case c.CHANGE_PAGE_STATE: {
      if(pageType === 'archive') {
        return {...state, homePage: false, archivePage: true};
      } else {
        return {...state, homePage: true, archivePage: false};
      }
    }
    default: {
      return state;
    }
  }

}
