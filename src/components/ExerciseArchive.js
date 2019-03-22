import React from 'react';
import { connect } from 'react-redux';
import PreviousExerciseList from './PreviousExerciseList';
import { onArchivePageLoad } from '../actions';

class ExerciseArchive extends React.Component {

  componentWillMount(props) {
    this.props.dispatch(onArchivePageLoad());
  }

  render() {
    const exerciseArchivesStyles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '145px 0 28px 0'
    };
    const exerciseArchivesTitleStyles = {
      fontSize: '30px',
      marginBottom: '28px'
    };

    return(
      <div style={exerciseArchivesStyles}>
        <div style={exerciseArchivesTitleStyles}>Workout Archive</div>
        <PreviousExerciseList />
      </div>
    );
  };

}

export default connect()(ExerciseArchive);
