import React from 'react';
import PropTypes from 'prop-types';

function Set({ setID, setNumber, weight, reps, exerciseID }) {

  const setStyles = {
    display: 'flex',
    alignItems: 'center'
  }
  const setSubWrapper = {
    width: '198px',
    height: '34px',
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid #3498DB',
    marginTop: '-1px'
  }
  const setNumberWrapperStyles = {
    width: '58px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const weightInputStyles = {
    width: '67px',
    paddingLeft: '13px',
    borderTop: 'none',
    borderRight: '1px solid #3498DB',
    borderBottom: 'none',
    borderLeft: '1px solid #3498DB'
  }
  const repsInputStyles = {
    width: '45px',
    paddingLeft: '13px',
    border: 'none'
  }

  return(
    <div style={setStyles}>
      <div style={setSubWrapper}>
        <div style={setNumberWrapperStyles}>
          <p>{setNumber}</p>
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
    </div>
  );
}

Set.propTypes = {
  setID: PropTypes.string,
  setNumber: PropTypes.number,
  weight: PropTypes.string,
  reps: PropTypes.string,
  exerciseID: PropTypes.string
}

export default Set;
