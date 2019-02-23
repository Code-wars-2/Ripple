import React, { Component } from 'react';
import { Button, message } from 'antd';

var array = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]

//put all variables here , use var to use as datatype
//example var num = 9
//example var fnum = 9.5


class Ripple extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dynamicArray: array,
    }
  }

  startSpiral = (i, j) => {
    //write your logic here
  }


  render() {
    return (
      <div className="body-container">
        <div className="container-spiral" style={{ height:array.length*100+"px" , width:array.length*100+"px" }}>
          {this.state.dynamicArray.map((iIndex, i) => {
            return iIndex.map((value, j) => {
              return (<Button onClick={() => this.startSpiral(i, j)} className="btn-spiral">
                <div className="btn-text-spiral">
                  {i+","+j}
                </div>
              </Button>)
            })
          })}
        </div>
      </div>
    )
  }
}

export default Ripple;