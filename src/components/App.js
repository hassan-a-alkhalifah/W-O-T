import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Error404 from './Error404';
import Header from './Header';
import Workout from './Workout';
import ExerciseArchive from './ExerciseArchive';
import Footer from './Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.initialExerciseID = v4();
    this.initialSetID = v4();
    this.state = {
      workoutTitleInput: '',
      workoutDateInput: '',
      workoutNotesInput: '',
      masterExerciseList: [
        {
          exerciseID: this.initialExerciseID,
          exerciseNumber: 1,
          exerciseName: '',
          setList: [
            {
              setID: this.initialSetID,
              setNumber: 1,
              weight: '',
              reps: ''
            }
          ]
        }
      ]
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(eventType, inputName, inputID, exerciseID) {
    if(inputName === 'workout') {
      this.setState({
        [eventType.target.name]: eventType.target.value
      }, () => {
        console.log(this.state);
      })
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact path='/'
            render={()=>
              <Workout
                workoutTitleInput={this.state.workoutTitleInput}
                workoutDateInput={this.state.workoutDateInput}
                workoutNotesInput={this.state.workoutNotesInput}
                masterExerciseList={this.state.masterExerciseList}
                onInputChange={this.handleInputChange}
              />
            }
          />
          <Route
            exact path='/exerciseArchive'
            render={()=>
              <ExerciseArchive />
            }
          />
          <Route component={ Error404 }/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect()(App));
