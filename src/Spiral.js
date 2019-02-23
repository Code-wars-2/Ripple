import React, { Component } from 'react';
import { Button, message } from 'antd';

var array = [
  [0, 0, 0, 0, 0 , 0],
  [0, 0, 0, 0, 0 , 0],
  [0, 0, 0, 0, 0 , 0],
  [0, 0, 0, 0, 0 , 0],
  [0, 0, 0, 0, 0 , 0],
  [0, 0, 0, 0, 0 , 0],
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
        <div className="container-spiral" >
          {this.state.dynamicArray.map((iIndex, i) => {
            return iIndex.map((value, j) => {
              return (<Button onClick={() => this.startSpiral(i, j)} className="btn-spiral" style={{ height:500/array.length+"px" , width:500/array.length+"px" }}>
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