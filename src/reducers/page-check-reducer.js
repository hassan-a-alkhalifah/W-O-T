import constants from './../constants';

const { c } = constants;
const initialState = {
  homePage: true,
  archivePage: false,
  pageType: '/',
  ifEdit: false
};

export default (state = initialState, action) => {

  const { pageType, ifEdit } = action;

  switch(action.type) {
    case c.CHANGE_PAGE_STATE: {
      if(state.pageType === '/exerciseArchive') {
        return {...state, homePage: false, archivePage: true};
      } else {
        return {...state, homePage: true, archivePage: false};
      }
    }
    case c.CHANGE_PAGE_TYPE: {
      return {...state, pageType: pageType, ifEdit: ifEdit};
    }
    case c.LOAD_ARCHIVE_PAGE: {
      console.log('running');
      return {...state, homePage: false, archivePage: true};
    }
    default: {
      return state;
    }
  }

}
