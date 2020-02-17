export const getRippledPath = (oldRipple, center) => {
  let newRipple = [];
  if (oldRipple.length < 2) {
    newRipple.push({ row: oldRipple[0].row - 1, column: oldRipple[0].column - 1 });
    newRipple.push({ row: oldRipple[0].row - 1, column: oldRipple[0].column     });
    newRipple.push({ row: oldRipple[0].row - 1, column: oldRipple[0].column + 1 });
    newRipple.push({ row: oldRipple[0].row    , column: oldRipple[0].column - 1 });
    newRipple.push({ row: oldRipple[0].row    , column: oldRipple[0].column + 1 });
    newRipple.push({ row: oldRipple[0].row + 1, column: oldRipple[0].column - 1 });
    newRipple.push({ row: oldRipple[0].row + 1, column: oldRipple[0].column     });
    newRipple.push({ row: oldRipple[0].row + 1, column: oldRipple[0].column + 1 });
    console.log(newRipple)
  } else {
    oldRipple.forEach((ripple, index) => {
      cornerOrEdge(ripple, index, oldRipple)
    })
    // newRipple = oldRipple;
    debugger;
  }
  return newRipple;
}

export const cornerOrEdge = (point, index, oldRipple) => {
  let pointTop = { row: point.row - 1, column: point.column     };
  let pointLeft = { row: point.row    , column: point.column - 1 };
  let pointRight = { row: point.row    , column: point.column + 1 };
  let pointBottom = { row: point.row + 1, column: point.column     };
  let refPoints = [];
  let indexes = [];
  refPoints.push(pointTop, pointLeft, pointRight, pointBottom);
  oldRipple.forEach((ripple, index) => {
    refPoints.forEach((ref, refIndex) => {
      if (ripple.row === ref.row && ripple.column === ref.column) {
        indexes.push(refIndex)
      }
    })
  })
  console.log(point, indexes)
}

export const redrawGrid = (grid, newRipple) => {
  grid.forEach((row, rowIndex) => {
    row.forEach((column, colIndex) => {
      grid[rowIndex][colIndex] = 1;
    })
  })
  newRipple.forEach((ripple, index) => {
    grid[ripple.row][ripple.column] = 2;
  })
  return grid;
}