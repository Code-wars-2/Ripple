import React, { Component } from 'react';
import { getRippledPath, redrawGrid } from '../Lib/Utils';

var rippleTimer;
var count = 0;

class Ripple extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      size: 40
    }
  }

  componentDidMount() {
    this.setupGrid()
  }

  setupGrid = () => {
    let { size } = this.state;
    let grid = new Array(size);
    grid.fill(1);
    grid.forEach((value, index) => {
      let innerGrid = new Array(size);
      innerGrid.fill(1);
      grid[index] = innerGrid;
    })
    this.setState({
      grid
    })
  }

  toggleItem = (e) => {
    let row = parseInt(e.target.getAttribute('data-row'));
    let column = parseInt(e.target.getAttribute('data-column'));
    let { grid } = this.state;
    grid[row][column] = grid[row][column] === 1 ? 2 : 1;
    this.setState({
      grid
    })
  }

  startRipple = (e) => {
    let row = parseInt(e.target.getAttribute('data-row'));
    let column = parseInt(e.target.getAttribute('data-column'));
    let { grid } = this.state;
    grid[row][column] = 2;
    let currentRipple = [{ row, column }];
    let center = { row, column }
    this.setState({
      grid
    })
    count = 0;
    rippleTimer = setTimeout(this.moveRipple, 150, currentRipple, center)
  }

  moveRipple = (currentRipple, center) => {
    let { grid } = this.state;
    let newRipple = getRippledPath(currentRipple, center)
    this.setState({
      grid: redrawGrid(grid, newRipple)
    })
    count += 1;
    if (count < 5) {
      rippleTimer = setTimeout(this.moveRipple, 150, newRipple, center)
    } else {
      clearTimeout(rippleTimer)
    }
  }

  renderColumn = (rowIndex, column, colIndex) => {
    let className;
    if (column === 1) {
      className = "grid-item-grey";
    } else if (column === 2) {
      className = "grid-item-blue";
    }
    return <div className={className} data-row={rowIndex} data-column={colIndex} key={colIndex} onClick={this.startRipple}></div>
  }

  renderRow = (column, index) => {
    return <div className="grid-row" key={index}>{column.map(this.renderColumn.bind(this, index))}</div>
  }

  render() {
    let { grid } = this.state;
  
    return (
      <div className="main-container">
        <div className="grid-container">
          {grid.map(this.renderRow)}
        </div>
      </div>
    )
  }
}

export default Ripple;