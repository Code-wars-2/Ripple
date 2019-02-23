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
     import java.lang.*;
import java.util.*;

public class HelloWorld{

     public static void main(String []args){
        System.out.println("Hello World");
        int m;
        int p;int q,y,z;
        int i=4; int j=4;
         y=j-1;
         z=j+1;
        for(m=0;m<4;m++){
           
            while(j<z+m){  //right
                j++;
                System.out.print(i+""+ j);System.out.print("\t");
            }System.out.println();
            while(i<z+m){ //down
                i++;
                System.out.print(i+""+j);System.out.print("\t");
            }System.out.println();
            while(j>y-m)//left
            {
                j--;
                System.out.print(i+""+j);System.out.print("\t");
            }System.out.println();
            while(i>y-m){//up
                i--;
                System.out.print(i+""+j);System.out.print("\t");
            }
        }while(j<=m+1){  //right
                j++;
                System.out.print(i+""+ j);System.out.print("\t");
            }System.out.println();
     }
}

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