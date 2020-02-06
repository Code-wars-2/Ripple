import React, { Component } from 'react';
import * as Container from './Containers/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Components from './Components/index'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Components.Header/>
          <Switch>
            <Route exact path="/" component={Container.Maze} />
            <Route exact path="/ripple" component={Container.Ripple} />
            <Route exact path="/ripple-mod" component={Container.RippleMod} />
            <Route exact path="/spiral" component={Container.Spiral} />
            <Route exact path="/learner" component={Container.Learner} />
          </Switch>
        </Router>
      </React.Fragment>

    )
  }
}

export default App;
