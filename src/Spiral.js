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
var y;
var z;
var m = 0;
var c = 0;



class Ripple extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dynamicArray: array,
    }
  }

  startSpiral = (i, j) => {
        let data = this.state.dynamicArray;
        data[i][j]=1;
        this.setState({
          dynamicArray:data
        })
        setTimeout(this.spiral,300,i,j,data)
  }

  spiral = (i,j,data) => {
    // y=i-1;
    // z=j+1;
    if(m<10){
        // while(j<z+m){  //right
        //         j++;
        //         console.log(i+""+ j)
        //         data[i][j]=1
        // }
        // while(i<z+m){ //down
        //         i++;
        //         console.log(i+""+j)
        //         data[i][j]=1
        // }
        // while(j>y-m)//left
        // {
        //         j--;
        //         console.log(i+""+j)
        //         data[i][j]=1
        // }
        // while(i>y-m){//up
        //         i--;
        //         console.log(i+""+j)
        //         data[i][j]=1
        // }
        // while(j<=m+1){  //right
        //         j++;
        //         console.log(i+""+ j)
        //         data[i][j]=1
        // }
        if(c%5===0){//right
          data[i][j+1]=1;
          this.setState({
            dynamicArray:data
          })
          setTimeout(this.spiral , 300 , i , j , data)
        }
        if(c%5===1){//down
          if(m==1){
            data[i+1][j+1]=1
          }else{
            for(var a=i+1;a<=j+1;a++){
              data[a][j+1]=1;
            }
          }
          this.setState({
            dynamicArray:data
          })
          setTimeout(this.spiral , 300 , i , j , data)         
        }
        if(c%5===2){//left
          for(var b=j+1;b>=i-1;b--){
            data[j+1][b]=1;
          }
          this.setState({
            dynamicArray:data
          })
          setTimeout(this.spiral , 300 , i , j , data)           
        }
        if(c%5===3){//up
          for(var d=j+1;d>=i-1;d--){
            data[d][i-1]=1;
          }
          this.setState({
            dynamicArray:data
          })
          setTimeout(this.spiral , 300 , i , j , data)           
        }
        if(c%5===4){//right
          for(var e=i-1;e<=j+1;e++){
            data[i-1][e]=1;
          }
          this.setState({
            dynamicArray:data
          })
          i=j-1;
          j=j+1;
          setTimeout(this.spiral , 300 , i , j , data)           
        }
        c++;
        m++;
    }
    else{
        clearTimeout()
        m = 0;
    }
  }


  render() {
    return (
      <div className="body-container">
        <div className="container-spiral" >
          {this.state.dynamicArray.map((iIndex, i) => {
            return iIndex.map((value, j) => {
              return (<Button onClick={() => this.startSpiral(i, j)} className={"btn-"+value+"-spiral"} style={{ height:500/array.length+"px" , width:500/array.length+"px"  }}>
                <div className="btn-text-spiral">
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

export default Ripple;