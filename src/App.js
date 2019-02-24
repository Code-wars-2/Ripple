import React, { Component } from 'react';
import Ripple from './Ripple';
import Spiral from './Spiral';
import RippleMod from './RippleMod';
import Maze from './Maze';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="contain">
        <div className="maze">
          <Maze />
        </div>
      </div>
    )
  }
}

export default App;
