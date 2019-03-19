import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { watchFirebaseAddWorkout, watchFirebaseDeleteWorkout, watchFirebaseEditWorkout } from '../actions';
import Error404 from './Error404';
import Header from './Header';
import Workout from './Workout';
import ExerciseArchive from './ExerciseArchive';
import Footer from './Footer';

class App extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(watchFirebaseAddWorkout());
    dispatch(watchFirebaseDeleteWorkout());
    dispatch(watchFirebaseEditWorkout());
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact path='/'
            render={()=>
              <Workout />
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

App.propTypes = {
  dispatch: PropTypes.func
}

export default withRouter(connect()(App));
