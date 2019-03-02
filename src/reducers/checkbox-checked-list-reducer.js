import constants from './../constants';

const { c } = constants;
const initialState = {
  workoutCheckedList: [],
  exerciseCheckedList: [],
  setCheckedList: []
}

export default (state = initialState, action) => {

  switch(action.type) {
    default: {
      return state;
    }
  }

}
