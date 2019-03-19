import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';
import { onDeleteChecked, onEmptyCheckedLists, onChangePageState, onChangePopUpModalState, onChangePageType, onDeleteWorkout } from '../actions';
import homeIcon from '../assets/images/home-icon.png';
import archiveIcon from '../assets/images/archive-icon.png';
import finishIcon from '../assets/images/finish-icon.png';
import deleteIcon from '../assets/images/delete-icon.png';

function Header({ dispatch, checkboxCheckedLists, ifAnyCheckboxIsChecked, homePage, archivePage, newWorkoutMasterExerciseList, ifEdit }) {

  const headerStyles = {
    width: '100%',
    position: 'fixed',
    zIndex: '200'
  }
  const headerTitleWrapperStyles = {
    height: '68px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    fontSize: '26px',
    color: '#FFF'
  }
  const headerIconsWrapperStyles = {
    height: '47px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DBDBDB'
  }
  const homeIconStyles = {
    width: '29px',
    height: '29px'
  }
  const exerciseArchiveIconStyles = {
    width: '30px',
    height: '26px'
  }
  const finishIconStyles = {
    width: '25px',
    height: '25px',
    cursor: 'pointer'
  }
  const deleteIconStyles = {
    width: '30px',
    height: '30px',
    cursor: 'pointer'
  }

  function checkIfAnyInputsAreNotBlank() {
    let anyInputsNotBlank = false;
    Object.keys(newWorkoutMasterExerciseList).forEach((currentWorkoutContent) => {
      if(currentWorkoutContent !== 'masterExerciseList') {
        if(newWorkoutMasterExerciseList[currentWorkoutContent] !== '') {
          anyInputsNotBlank = true;
        }
      } else {
        if(newWorkoutMasterExerciseList[currentWorkoutContent].length > 1) {
          anyInputsNotBlank = true;
        } else {
          Object.keys(newWorkoutMasterExerciseList[currentWorkoutContent][0]).forEach((currentExerciseContent) => {
            if(currentExerciseContent === 'exerciseName' && newWorkoutMasterExerciseList[currentWorkoutContent][0][currentExerciseContent] !== '') {
              anyInputsNotBlank = true;
            }
            if(currentExerciseContent === 'setList') {
              if(newWorkoutMasterExerciseList[currentWorkoutContent][0][currentExerciseContent].length > 1) {
                anyInputsNotBlank = true;
              } else if(newWorkoutMasterExerciseList[currentWorkoutContent][0][currentExerciseContent][0].weight !== '' || newWorkoutMasterExerciseList[currentWorkoutContent][0][currentExerciseContent][0].reps !== '') {
                anyInputsNotBlank = true;
              }
            }
          });
        }
      }
    });
    return anyInputsNotBlank;
  }

  let archiveIconTag = null;
  let finishIconTag = null;
  if(!archivePage) {
    archiveIconTag =
    <Link to='/exerciseArchive'>
      <img
        src={archiveIcon}
        alt='Archive Icon'
        style={exerciseArchiveIconStyles}
        onClick={(event) => {
          const anyInputsNotBlank = checkIfAnyInputsAreNotBlank();
          if(anyInputsNotBlank) {
            event.preventDefault();
            if(ifEdit) {
              dispatch(onChangePageType('/exerciseArchive', true));
            } else {
              dispatch(onChangePageType('/exerciseArchive', false));
            }
            dispatch(onChangePopUpModalState('withoutSavingPopUpModalShown'));
          } else {
            dispatch(onChangePageType('/exerciseArchive', false));
            dispatch(onChangePageState());
          }
        }}
      />
    </Link>;
  finishIconTag =
  <img
    src={finishIcon}
    alt='Finish Icon'
    style={finishIconStyles}
    onClick={() => {
      const anyInputsNotBlank = checkIfAnyInputsAreNotBlank();
      if(anyInputsNotBlank) {
        dispatch(onChangePopUpModalState('finishedWorkoutPopUpModalShown'));
      }
    }}
  />;
  }

  let deleteIconTag = null;
  if(ifAnyCheckboxIsChecked) {
    deleteIconTag =
    <img
      src={deleteIcon}
      alt='Delete Icon'
      style={deleteIconStyles}
      onClick={() => {
        if(archivePage) {
          dispatch(onDeleteWorkout(checkboxCheckedLists.workoutCheckedList));
        } else {
          const resettedExerciseID = v4();
          const resettedSetID = v4();
          dispatch(onDeleteChecked(checkboxCheckedLists, resettedExerciseID, resettedSetID));
        }
        dispatch(onEmptyCheckedLists());
      }}
    />;
  }

  return(
    <div style={headerStyles}>
      <div style={headerTitleWrapperStyles}>
        <h1>W-O-T</h1>
      </div>
      <div style={headerIconsWrapperStyles}>
        <Link to='/'>
          <img
            src={homeIcon}
            alt='Home Icon'
            style={homeIconStyles}
            onClick={(event) => {
              if(homePage) {
                const anyInputsNotBlank = checkIfAnyInputsAreNotBlank();
                event.preventDefault();
                if(anyInputsNotBlank) {
                  dispatch(onChangePopUpModalState('withoutSavingPopUpModalShown'));
                }
              } else {
                dispatch(onChangePageType('/', false));
                dispatch(onChangePageState());
              }
            }}
          />
        </Link>
        {archiveIconTag}
        {finishIconTag}
        {deleteIconTag}
      </div>
    </div>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func,
  checkboxCheckedLists: PropTypes.object,
  ifAnyCheckboxIsChecked: PropTypes.bool,
  homepage: PropTypes.bool,
  archivePage: PropTypes.bool,
  newWorkoutMasterExerciseList: PropTypes.object,
  ifEdit: PropTypes.bool
}

const mapStateToProps = (state) => {
  let ifAnyCheckboxIsChecked = false;
  Object.values(state.checkboxCheckedLists).forEach((checkboxList) => {
    if(checkboxList.length > 0) {
      ifAnyCheckboxIsChecked = true;
    }
  });
  return {
    checkboxCheckedLists: state.checkboxCheckedLists,
    ifAnyCheckboxIsChecked: ifAnyCheckboxIsChecked,
    homePage: state.pagesState.homePage,
    archivePage: state.pagesState.archivePage,
    newWorkoutMasterExerciseList: state.newWorkoutMasterExerciseList,
    ifEdit: state.pagesState.ifEdit
  }
}

export default connect(mapStateToProps)(Header);
