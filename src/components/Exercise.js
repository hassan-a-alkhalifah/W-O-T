import React from 'react';
import PropTypes from 'prop-types';
import addSetIcon from '../assets/images/add-set-icon.png';
import SetList from './SetList';

function Exercise(props) {
  return(
    <div>
      <div>
        <div></div>
        <input type='text' placeholder='Enter Exercise Name'/>
        <label>
          <input type='checkbox' name='exerciseCheckboxCheckedList'/>
          <span></span>
        </label>
      </div>
      <div>
        <div>
          <p>Sets</p>
        </div>
        <div>
          <p>Weight</p>
        </div>
        <div>
          <p>Reps</p>
        </div>
      </div>
      <SetList />
      <div>
        <div></div>
        <img src={addSetIcon} alt='Add Set Icon'/>
      </div>
    </div>
  );
}

export default Exercise;
