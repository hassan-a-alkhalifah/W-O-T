import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { onAddSet, onAddCheckedCheckboxID, onInputChange, onIconStateChange } from '../actions';
import onAddSetIcon from '../assets/images/add-set-icon.png';
import SetList from './SetList';

function Exercise({ exerciseID, exerciseName, setList, dispatch, noOfExercises }) {

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
    border: '1px solid #3498DB'
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
  const exerciseCheckBoxStyles = {
    marginLeft: '12px'
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

  let ifNotFirstExerciseCheckbox = null;
  let ifNotFirstExerciseSpacer = null;

  if(noOfExercises !== 1) {
    ifNotFirstExerciseCheckbox =
    <label className='checkbox' style={exerciseCheckBoxStyles}>
      <input
        type='checkbox'
        onChange={(event) => {
          dispatch(onAddCheckedCheckboxID(event.target.checked, 'exerciseCheckedList', exerciseID));
        }}
      />
      <span></span>
    </label>;
    ifNotFirstExerciseSpacer =
    <div style={exerciseNameInputSpacerStyles}></div>;
  }

  return(
    <div style={exerciseStyles}>
      <div style={exerciseNameInputWrapperStyles}>
        {ifNotFirstExerciseSpacer}
        <input
          type='text'
          placeholder='Enter Exercise Name'
          name='exerciseName'
          style={exerciseNameInputStyles}
          onChange={(event) => {
            dispatch(onInputChange('exercise', event.target.name, event.target.value, exerciseID));
          }}
        />
      {ifNotFirstExerciseCheckbox}
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
      />
      <div style={addSetIconWrapperStyles}>
        <div style={addSetIconSpacerStyles}></div>
        <img
          src={onAddSetIcon}
          alt='Add Set Icon'
          style={addSetIconStyles}
          onClick={() => {
            const addedSetID = v4();
            dispatch(onAddSet(exerciseID, addedSetID));
          }}
        />
      </div>
    </div>
  );
}

Exercise.propTypes = {
  exerciseID: PropTypes.string,
  exerciseName: PropTypes.string,
  setList: PropTypes.array,
  dispatch: PropTypes.func,
  noOfExercises: PropTypes.number
}

export default connect()(Exercise);
