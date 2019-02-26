import React from 'react';
import PropTypes from 'prop-types';
import Set from './Set';

function SetList({ setList, exerciseID, onInputChange }) {
  return(
    <div>
      {
        setList.forEach((set) => {
          return(
            <Set
              key={set.setID}
              setID={set.setID}
              setNumber={set.setNumber}
              weight={set.weight}
              reps={set.reps}
              exerciseID={exerciseID}
              onInputChange={onInputChange}
            />
          );
        })
      }
    </div>
  );
}

SetList.propTypes = {
  setList: PropTypes.array,
  exerciseID: PropTypes.number,
  onInputChange: PropTypes.func
}

export default SetList;
