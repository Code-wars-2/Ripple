import React, { Component } from 'react';
import { Button, message , Col } from 'antd';

var array = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]

let scale = 200;
let ratio = 40;
let count = 0;

let dir = ["left","right","up","down"]

class Maze extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dynamicArray: array,
      sub:false
    }
  }

  componentDidMount(){
    let data = this.state.dynamicArray;
    if(data.length=5){
      this.setState({
        sub:true
      })
    }
  }

  resetMaze = () => {
    let res = this.state.dynamicArray;
    for(var a=0;a<res.length;a++){
      for(var b=0;b<res.length;b++){
        res[a][b]=0
      }
    }
    this.setState({
      dynamicArray:res
    })
  }

  increaseArray = () => {
    let addArray = this.state.dynamicArray;
    let prevLength = this.state.dynamicArray.length;
    for(var c=0;c<addArray.length;c++){
      addArray[c].push(0)
    }
    addArray.push([])
    for(var c=0;c<addArray.length;c++){
      addArray[prevLength].push(0)
    }
    scale = scale+ratio;
    this.setState({
      dynamicArray:addArray
    })
  }

  decreaseArray = () => {
    let subArray = this.state.dynamicArray;
    let prevLength = this.state.dynamicArray.length;
    for(var c=0;c<subArray.length;c++){
      subArray[c].pop()
    }
    subArray.pop();
    console.log(subArray)
    scale = scale-ratio;
    this.setState({
      dynamicArray:subArray
    })
  }

  setTarget = () => {
    let data = this.state.dynamicArray;
    for(var o=0;o<data.length;o++){
      for(var p=0;p<data.length;p++){
        if(data[o][p]==2){
          data[o][p]=0;
        }
      }
    }
    var x = Math.floor(Math.random()*this.state.dynamicArray.length);
    var y = Math.floor(Math.random()*this.state.dynamicArray.length);
    if(data[x][y]===3){
      this.setTarget();     
    }
    else{
      data[x][y]= 2;     
    }
    this.setState({
      dynamicArray:data
    })
  }


  setObstacle = () => {
    let data = this.state.dynamicArray;
    for(var o=0;o<data.length;o++){
      for(var p=0;p<data.length;p++){
        if(data[o][p]==3){
          data[o][p]=0;
        }
      }
    }
    for(var h=0;h<(((data.length*data.length)-1)/2);h++){
        var x = Math.floor(Math.random()*this.state.dynamicArray.length);
        var y = Math.floor(Math.random()*this.state.dynamicArray.length);
        if(data[x][y]!=3){
          data[x][y]=3
        }
        else{
          h=h-1
        }
    }
    this.setState({
      dynamicArray:data
    })
  }


  findPath = (i,j) => {
    let data = this.state.dynamicArray;
    if(data[i][j]===2 || data[i][j]===3){
      return;
    }
    else{
      if(count<10){
        data = this.state.dynamicArray;
        for(var o=0;o<data.length;o++){
          for(var p=0;p<data.length;p++){
            if(data[o][p]==1){
              data[o][p]=0;
            }
          }
        }
        if(i>=0&&i<data.length&&j>=0&&j<data.length){
          data[i][j]=1;
        }
        this.setState({
            dynamicArray:data
        })
        var r = dir[Math.floor(Math.random()*dir.length)];
        switch(r){
          case "left":
            if(j>0){
              j=j-1;
              setTimeout(this.findPath,500,i,j)
            }
            else{
              setTimeout(this.findPath,500,i,j)
            }
            break;
          case "right":
            if(j<data.length-1){
              j=j+1;
              setTimeout(this.findPath,500,i,j)
            }
            else{
              setTimeout(this.findPath,500,i,j)
            }
            break;
          case "up":
            if(i>0){
              i=i-1;
              setTimeout(this.findPath,500,i,j)
            }
            else{
              setTimeout(this.findPath,500,i,j)
            }
            break;
          case "down":
            if(i<data.length-1){
              i=i+1;
              setTimeout(this.findPath,500,i,j)
            }
            else{
              setTimeout(this.findPath,500,i,j)
            }
            break;
          default:
            console.log("default");
        } 
        count++;
      }
      else{
        console.log("Over");
        for(var o=0;o<data.length;o++){
          for(var p=0;p<data.length;p++){
              data[o][p]=0;
          }
        }
        return;
      }
    }
  }

  render() {
    return (
      <div className="body-container">
        <div className="container-maze" style={{ height:scale+"px" , width:scale+"px" }}>
          {this.state.dynamicArray.map((iIndex, i) => {
            return iIndex.map((value, j) => {
              return (<Button onClick={() => this.findPath(i, j)} className={"btn-"+value+"-maze"} style={{ height:ratio+"px" , width:ratio+"px"  }}>
                <div className="btn-text-maze">
                  {value}
                </div>
              </Button>)
            })
          })}
        </div>
        <div className="action-buttons">
          <Button.Group>
            <Button className="reset" onClick={this.resetMaze}>Reset</Button>
            <Button className="reset" onClick={this.increaseArray}>X{this.state.dynamicArray.length+1}</Button>
            <Button className="reset" onClick={this.decreaseArray}>X{this.state.dynamicArray.length-1}</Button>
            <Button className="reset" onClick={this.setTarget}>Target</Button>
            <Button className="reset" onClick={this.setObstacle}>Obstacle</Button>
          </Button.Group>
        </div>
      </div>
    )
  }
}

export default Maze;