import React, { Component } from 'react';
import * as Container from './Containers/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component { 
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Container.Ripple} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;
