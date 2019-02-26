import React from 'react';
import PropTypes from 'prop-types';
import Set from './Set';

function SetList({ setList, exerciseID }) {
  return(
    <div>
      {
        setList.map((set) => {
          return(
            <Set
              key={set.setID}
              setID={set.setID}
              setNumber={set.setNumber}
              weight={set.weight}
              reps={set.reps}
              exerciseID={exerciseID}
            />
          );
        })
      }
    </div>
  );
}

SetList.propTypes = {
  setList: PropTypes.array,
  exerciseID: PropTypes.string
}

export default SetList;
