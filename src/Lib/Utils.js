export const getTriPoints = (point, type) => {
  let triPoints = [];
  switch (type) {
    case 'top-left': {
      triPoints.push({ row: point.row - 1, column: point.column - 1 });
      triPoints.push({ row: point.row - 1, column: point.column     });
      triPoints.push({ row: point.row    , column: point.column - 1 });
      break;
    } case 'top-right': {
      triPoints.push({ row: point.row - 1, column: point.column     });
      triPoints.push({ row: point.row - 1, column: point.column + 1 });
      triPoints.push({ row: point.row    , column: point.column + 1 });
      break;
    } case 'bottom-left': {
      triPoints.push({ row: point.row    , column: point.column - 1 });
      triPoints.push({ row: point.row + 1, column: point.column - 1 });
      triPoints.push({ row: point.row + 1, column: point.column     });
      break;
    } case 'bottom-right': {
      triPoints.push({ row: point.row    , column: point.column + 1 });
      triPoints.push({ row: point.row + 1, column: point.column     });
      triPoints.push({ row: point.row + 1, column: point.column + 1 });
      break;
    }
    default: {
      return
    }
  }
  return triPoints;
}

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
  } else {
    oldRipple.forEach((ripple, index) => {
      newRipple.push(cornerOrEdge(ripple, index, oldRipple, center))
    })
    let tempRipple = [];
    newRipple.forEach((rippleArray, index) => {
      rippleArray.forEach((ripple, index) => {
        tempRipple.push(ripple)
      })
    })
    newRipple = tempRipple;
    console.log(newRipple)
  }
  return newRipple;
}

export const cornerOrEdge = (point, index, oldRipple, center) => {
  let pointTop = { row: point.row - 1, column: point.column     };
  let pointLeft = { row: point.row    , column: point.column - 1 };
  let pointBottom = { row: point.row + 1, column: point.column     };
  let pointRight = { row: point.row    , column: point.column + 1 };
  let refPoints = [];
  let indexes = [];
  let newRipple = [];
  let triPoints;
  refPoints.push(pointTop, pointLeft, pointBottom, pointRight);
  oldRipple.forEach((ripple, index) => {
    refPoints.forEach((ref, refIndex) => {
      if (ripple.row === ref.row && ripple.column === ref.column) {
        indexes.push(refIndex)
      }
    })
  })
  if (Math.abs(indexes[0] - indexes[1]) === 2) {
    let difference = { row: point.row - center.row, column: point.column - center.column }
    if (difference.row === 0) {
      if (difference.column < 0) {
        triPoints = [{ row: point.row, column: point.column - 1 }]
      } else {
        triPoints = [{ row: point.row, column: point.column + 1 }]
      }
    } else if (difference.column === 0) {
      if (difference.row < 0) {
        triPoints = [{ row: point.row - 1, column: point.column }]
      } else {
        triPoints = [{ row: point.row + 1, column: point.column }]
      }
    }
    triPoints.forEach((triPoint, index) => {
      newRipple.push({ row: triPoint.row, column: triPoint.column })
    })
  } else {
    let difference = { row: point.row - center.row, column: point.column - center.column }
    if (difference.row < 0) {
      if (difference.column < 0) {
        triPoints = getTriPoints(point, 'top-left');
      } else {
        triPoints = getTriPoints(point, 'top-right');
      }
    } else if (difference.row > 0) {
      if (difference.column < 0) {
        triPoints = getTriPoints(point, 'bottom-left');
      } else {
        triPoints = getTriPoints(point, 'bottom-right');
      }
    }
    triPoints.forEach((triPoint, index) => {
      newRipple.push({ row: triPoint.row, column: triPoint.column })
    })
  }
  return newRipple;
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