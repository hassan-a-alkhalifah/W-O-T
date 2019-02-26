import React from 'react';
import PropTypes from 'prop-types';
import addSetIcon from '../assets/images/add-set-icon.png';
import SetList from './SetList';

function Exercise({ exerciseID, exerciseName, setList, onInputChange }) {

  const exerciseStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  const exerciseNameInputWrapperStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const exerciseNameInputSpacerStyles = {
    width: '31px',
    height: '13px'
  }
  const exerciseNameInputStyles = {
    width: '185px',
    height: '34px',
    paddingLeft: '13px',
    border: '1px solid #3498DB',
    marginRight: '12px'
  }
  const exerciseLabelsWrapperStyles = {
    width: '198px',
    height: '34px',
    border:' 1px solid #3498DB',
    marginTop: '-1px',
    display: 'flex',
    justifyContent: 'center'
  }
  const labelsWrapperStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: '400'
  }
  const setsLabelWrapperStyles = {
    width: '58px'
  }
  const weightLabelWrapperStyles = {
    width: '80px',
    borderLeft: '1px solid #3498DB',
    borderRight: '1px solid #3498DB'
  }
  const repsLabelWrapperStyles = {
    width: '58px'
  }
  const exerciseLabelsStyles = {
    fontWeight: '400'
  }
  const addSetIconWrapperStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const addSetIconSpacerStyles = {
    width: '238px',
    height: '34px'
  }
  const addSetIconStyles = {
    width: '12px',
    height: '12px',
    cursor: 'pointer'
  }

  return(
    <div style={exerciseStyles}>
      <div style={exerciseNameInputWrapperStyles}>
        <div style={exerciseNameInputSpacerStyles}></div>
        <input
          type='text'
          placeholder='Enter Exercise Name'
          style={exerciseNameInputStyles}
          value={exerciseName}
          onChange={(event) => {
            onInputChange(event, 'exercise', exerciseID);
          }}
        />
        <label className='checkbox'>
          <input
            type='checkbox'
            name='exerciseCheckboxCheckedList'
            onChange={(event) => {
              onInputChange(event, 'exerciseCheckbox', exerciseID);
            }}
          />
          <span></span>
        </label>
      </div>
      <div style={exerciseLabelsWrapperStyles}>
        <div style={Object.assign({}, labelsWrapperStyles, setsLabelWrapperStyles)}>
          <p style={exerciseLabelsStyles}>Sets</p>
        </div>
        <div style={Object.assign({}, labelsWrapperStyles, weightLabelWrapperStyles)}>
          <p>Weight</p>
        </div>
        <div style={Object.assign({}, labelsWrapperStyles, repsLabelWrapperStyles)}>
          <p>Reps</p>
        </div>
      </div>
      <SetList
        setList={setList}
        exerciseID={exerciseID}
        onInputChange={onInputChange}
      />
      <div style={addSetIconWrapperStyles}>
        <div style={addSetIconSpacerStyles}></div>
        <img src={addSetIcon} alt='Add Set Icon' style={addSetIconStyles}/>
      </div>
    </div>
  );
}

Exercise.propTypes = {
  exerciseID: PropTypes.number,
  exerciseName: PropTypes.string,
  setList: PropTypes.array,
  onInputChange: PropTypes.func
}

export default Exercise;
