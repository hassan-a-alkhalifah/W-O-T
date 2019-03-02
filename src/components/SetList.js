import React from 'react';
import PropTypes from 'prop-types';
import Set from './Set';

function SetList({ setList, exerciseID }) {
  return(
    <div>
      {
        setList.map((set, index) => {
          return(
            <Set
              key={ set.setID }
              setID={ set.setID }
              setPos={ index + 1 }
              weight={ set.weight }
              reps={ set.reps }
              exerciseID={ exerciseID }
              noOfSets={ setList.length }
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
