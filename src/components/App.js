import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Error404 from './Error404';
import Workout from './Workout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact path='/'
            render={()=>
              <Workout />
            }
          />
          <Route component={ Error404 }/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
