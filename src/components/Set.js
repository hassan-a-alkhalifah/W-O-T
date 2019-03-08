import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { onAddCheckedCheckboxID, onInputChange } from '../actions';

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

  if(noOfSets !== 1) {
    ifNotFirstSetCheckbox =
    <label className='checkbox' style={setCheckBoxStyles}>
      <input
        type='checkbox'
        onChange={(event) => {
          dispatch(onAddCheckedCheckboxID(event.target.checked, 'setCheckedList', setID));
        }}
      />
      <span></span>
    </label>;
    ifNotFirstSetSpacer =
    <div style={setWrapperSpacerStyles}></div>;
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
          name='weight'
          style={weightInputStyles}
          onChange={(event) => {
            dispatch(onInputChange('set', event.target.name, event.target.value, setID, exerciseID));
          }}
        />
        <input
          className="repInput"
          type="number"
          name='reps'
          style={repsInputStyles}
          onChange={(event) => {
            dispatch(onInputChange('set', event.target.name, event.target.value, setID, exerciseID));
          }}
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
  noOfSets: PropTypes.number,
  dispatch: PropTypes.func
}

export default connect()(Set);
