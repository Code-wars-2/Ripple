import React, { Component } from 'react'; 
import { Button , message } from 'antd';

let array = [
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0], 
]

let height = 0
let width = 0

const addFactor = [0,0,0,1,0,2,0,3,0,4,0,5];
let factor = 3;

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dynamicArray:array,
    }
  }

  componentDidMount(){
    height = window.screen.height;
    width = window.screen.width;
  }

  showIndex = (i,j) => {
    let data = this.state.dynamicArray
    data[i][j] = 1;
    this.renderRing(data,i,j,factor)
  }

  renderRing = (data,i,j,factor) => {
    if(factor<=data.length){
    let iPlus= null;
    let iMinus = null;
    let jPlus = null;
    let jMinus = null;
    if(i>=0&&i<data.length){
      iPlus=i+addFactor[factor];
      iMinus=i-addFactor[factor];
    }
    if(j>=0&&j<data.length){
      jPlus=j+addFactor[factor];
      jMinus=j-addFactor[factor];
    }
    if(iPlus<data.length&&jPlus<data.length){
      data[iPlus][jPlus]=1;   
    }
    if(iMinus>=0&&jMinus>=0){
      data[iMinus][jMinus]=1;
    }
      console.log("setInterval" , factor)

        if(iMinus>=0&&jMinus>=0){
      for(let iIndex=iMinus;iIndex<iMinus+factor;iIndex++){
        if(iIndex<data.length&&jMinus<data.length){
          data[iIndex][jMinus]=1         
        }
      }
      for(let jIndex=jMinus;jIndex<jMinus+factor;jIndex++){
        if(jIndex<data.length&&iMinus<data.length){
          data[iMinus][jIndex]=1         
        }
      } 
      }

      if(iPlus<data.length&&jPlus<data.length){
      for(let iIndex=iPlus;iIndex>iPlus-factor;iIndex--){
        if(iIndex>=0&&iPlus>=0){
          data[iIndex][jPlus]=1         
        }
      }
      for(let jIndex=jPlus;jIndex>jPlus-factor;jIndex--){
        if(jIndex>=0&&jPlus>=0){
          data[iPlus][jIndex]=1
        }
      }
      }

    this.setState({
      dynamicArray:data
    })
    factor=factor+2
    setInterval(this.renderRing,2000,data,i,j,factor) 
    }
    else{
      return false;
    }  
  }


  render() {
    return (
      <div className="body-container">
        <div className="container">
          {this.state.dynamicArray.map((iIndex,i) => {
              return iIndex.map((value,j) => {
                  return (<Button onClick={()=>this.showIndex(i,j)} className={"btn-"+value.toString()}>
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

export default App;
