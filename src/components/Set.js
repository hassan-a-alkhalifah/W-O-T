import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCheckedCheckboxID } from '../actions';

function Set({ setID, setPos, weight, reps, exerciseID, noOfSets, dispatch }) {

  const setStyles = {
    display: 'flex',
    alignItems: 'center'
  };
  const setWrapperSpacerStyles = {
    width: '31px',
    height: '13px'
  };
  const setSubWrapper = {
    width: '198px',
    height: '34px',
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid #3498DB',
    marginTop: '-1px'
  };
  const setNumberWrapperStyles = {
    width: '58px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const weightInputStyles = {
    width: '67px',
    paddingLeft: '13px',
    borderTop: 'none',
    borderRight: '1px solid #3498DB',
    borderBottom: 'none',
    borderLeft: '1px solid #3498DB'
  };
  const repsInputStyles = {
    width: '45px',
    paddingLeft: '13px',
    border: 'none'
  };
  const setCheckBoxStyles = {
    marginLeft: '12px'
  }

  let ifNotFirstSetCheckbox = null;
  let ifNotFirstSetSpacer = null;

  if(setPos !== 1) {
    ifNotFirstSetCheckbox =
    <label className='checkbox' style={setCheckBoxStyles}>
      <input
        type='checkbox'
        onChange={(event) => {
          dispatch(addCheckedCheckboxID(event.target.checked, 'setCheckedList', setID));
        }}
      />
      <span></span>
    </label>;
  }
  if(noOfSets !== 1) {
    ifNotFirstSetSpacer =
    <div style={setWrapperSpacerStyles}></div>
  }

  return(
    <div style={setStyles}>
      {ifNotFirstSetSpacer}
      <div style={setSubWrapper}>
        <div style={setNumberWrapperStyles}>
          <p>{setPos}</p>
        </div>
        <input
          className="weightInput"
          type="number"
          style={weightInputStyles}
        />
        <input
          className="repInput"
          type="number"
          style={repsInputStyles}
        />
      </div>
      {ifNotFirstSetCheckbox}
    </div>
  );
}

Set.propTypes = {
  setID: PropTypes.string,
  setPos: PropTypes.number,
  weight: PropTypes.string,
  reps: PropTypes.string,
  exerciseID: PropTypes.string,
  noOfSets: PropTypes.number
}

export default connect()(Set);
