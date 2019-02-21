import React, { Component } from 'react';
import Ripple from './Ripple';
import Spiral from './Spiral';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="contain">
        <div className="ripple">
          Ripple
          <Ripple />
        </div>
        {/* <div className="spiral">
          Spiral
          <Spiral />
        </div> */}
      </div>
    )
  }
}

export default App;
