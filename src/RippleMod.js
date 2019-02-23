import React, { Component } from 'react';
import { Button, message } from 'antd';

let array = [
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
]


var intensity = array.length-1;
let ends = [
  [0,0],
  [0,0],
  [0,0],
  [0,0],
]

var prevEnds = [[],[],[],[]];

class RippleMod extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dynamicArray: array,
    }
  }

  ripple = (i, j) => {
    let data = this.state.dynamicArray
    data[i][j] = 1;
    this.setState({
      dynamicArray: data
    })
    this.renderDiagonals(data,i,j)
  }

  renderDiagonals = (data,i,j) => {
    if(intensity>0){
      if(intensity===10){
      ends[0][0]=i-1;
      ends[0][1]=j-1;
      ends[1][0]=i-1;
      ends[1][1]=j+1;
      ends[2][0]=i+1;
      ends[2][1]=j+1;
      ends[3][0]=i+1;
      ends[3][1]=j-1;
      }
      else {
      prevEnds[0][0]=ends[0][0];
      prevEnds[0][1]=ends[0][1];
      prevEnds[1][0]=ends[1][0];
      prevEnds[1][1]=ends[1][1];
      prevEnds[2][0]=ends[2][0];
      prevEnds[2][1]=ends[2][1];
      prevEnds[3][0]=ends[3][0];
      prevEnds[3][1]=ends[3][1];

      ends[0][0]=ends[0][0]-1;
      ends[0][1]=ends[0][1]-1;
      ends[1][0]=ends[1][0]-1;
      ends[1][1]=ends[1][1]+1;
      ends[2][0]=ends[2][0]+1;
      ends[2][1]=ends[2][1]+1;
      ends[3][0]=ends[3][0]+1;
      ends[3][1]=ends[3][1]-1;
      }
      for(var a=0;a<data.length;a++){
        for(var b=0;b<data.length;b++){
          if(a===ends[0][0] && b===ends[0][1]){
            data[a][b]=intensity-2;
          }
          if(a===ends[1][0] && b===ends[1][1]){
            data[a][b]=intensity-2;
          }
          if(a===ends[2][0] && b===ends[2][1]){
            data[a][b]=intensity-2;
          }
          if(a===ends[3][0] && b===ends[3][1]){
            data[a][b]=intensity-2;
          }
        }
      }
      if (prevEnds.length) {
        for (var a = 0; a < data.length; a++) {
          for (var b = 0; b < data.length; b++) {
            if (a === prevEnds[0][0] && b === prevEnds[0][1]) {
              data[a][b] = 10;
            }
            if (a === prevEnds[1][0] && b === prevEnds[1][1]) {
              data[a][b] = 10;
            }
            if (a === prevEnds[2][0] && b === prevEnds[2][1]) {
              data[a][b] = 10;
            }
            if (a === prevEnds[3][0] && b === prevEnds[3][1]) {
              data[a][b] = 10;
            }
          }
        }
      }
      for(var e=ends[0][1];e<ends[1][1];e++){
        data[ends[0][0]][e]=intensity-2;
      }
      for(var e=ends[0][0];e<ends[3][0];e++){
        data[e][ends[0][1]]=intensity-2;
      }
      for(var e=ends[1][1];e>ends[0][1];e--){
        data[ends[1][0]][e]=intensity-2;
      }
      for(var e=ends[1][0];e<ends[2][0];e++){
        data[e][ends[1][1]]=intensity-2;
      }

      for(var e=ends[2][0];e>ends[1][0];e--){
        data[e][ends[0][0]]=intensity-2;
      }
      for(var e=ends[2][1];e>ends[3][1];e--){
        data[ends[2][0]][e]=intensity-2;
      }
      for(var e=ends[3][1];e<ends[2][1];e++){
        data[ends[3][0]][e]=intensity-2;
      }
      for(var e=ends[3][0];e<ends[0][0];e--){
        data[e][ends[3][1]]=intensity-2;
      }

      for (var e = prevEnds[0][1]; e < prevEnds[1][1]; e++) {
        data[prevEnds[0][0]][e] = 10;
      }
      for (var e = prevEnds[0][0]; e < prevEnds[3][0]; e++) {
        data[e][prevEnds[0][1]] = 10;
      }
      for (var e = prevEnds[1][1]; e > prevEnds[0][1]; e--) {
        data[prevEnds[1][0]][e] = 10;
      }
      for (var e = prevEnds[1][0]; e < prevEnds[2][0]; e++) {
        data[e][prevEnds[1][1]] = 10;
      }

      for (var e = prevEnds[2][0]; e > prevEnds[1][0]; e--) {
        data[e][prevEnds[0][0]] = 10;
      }
      for (var e = prevEnds[2][1]; e > prevEnds[3][1]; e--) {
        data[prevEnds[2][0]][e] = 10;
      }
      for (var e = prevEnds[3][1]; e < prevEnds[2][1]; e++) {
        data[prevEnds[3][0]][e] = 10;
      }
      for (var e = prevEnds[3][0]; e < prevEnds[0][0]; e--) {
        data[e][prevEnds[3][1]] = 10;
      }


      data[i][j]=10;
      this.setState({
        dynamicArray: data
      })
      intensity=intensity-2;
      setTimeout(this.renderDiagonals, 1000, data, i, j)
    }
    else{
      clearTimeout();
      intensity=10;
    }
  }


  render() {
    return (
      <div className="body-container">
        <div className="container">
          {this.state.dynamicArray.map((iIndex, i) => {
            return iIndex.map((value, j) => {
              return (<Button onClick={() => this.ripple(i, j)} className="btn-0" style={{ backgroundColor:"#"+value.toString()+value.toString()+value.toString() }}>
                <div className="btn-text">
                  {value}
                </div>
              </Button>)
            })
          })}
        </div>
      </div>
    )
  }
}

export default RippleMod;