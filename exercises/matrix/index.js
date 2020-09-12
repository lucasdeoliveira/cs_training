// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function assembleMatrix(n) {
  result = [];

  for (let i = 0; i < n; i++) {
    result.push(new Array(n).fill(0));
  }

  return result;
}

// Iterative method:
// define the number of steps (nxn)
// while we still have to step
// traverse left to right on row
// once last column reached the end of current row (n-1-round) then
// traverse from current row downwards to end of column [...]
function matrix(n) {
  [row, col, rounds] = [0, 0, 0];
  steps = n * n;
  idx = 1;

  result = assembleMatrix(n);
  console.log(result);

  dir = "lr"; //lr, ud, rl,du
  modif = 0;

  while (idx <= steps) {

    //set the value at current location
    if (result[row][col] === 0) {
      result[row][col] = idx;
    }

    //define next step
    switch (dir) {
      case "lr":
        //did we reach the end of column at one row? if so, change direction, if not continue incrementing column
        if (col === n - 1 - modif) {
          dir = "ud";
          row++;
        } else {
          col++;
        }

        break;

      case "ud":
        if (row === n - 1 - modif) {
          dir = "rl";
          col--;
        } else {
          row++;
        }

        break;

      case "rl":
        if (col <= 0 + modif) {
          dir = "du";
          row--;
          modif++;
        } else {
          col--;
        }

        break;
      case "du":
        if (row <= 0  + modif) {
          dir = "lr";
          col++;
        } else {
          row--;
        }

        break;

      default:
        break;
    }
    
    // console.log("\n");
    // for (const array of result) {
    //     console.log(array);
    // }

    idx++;
  }

  return result;
}

// matrix(2);
// matrix(3);
// matrix(4);
// matrix(5);

module.exports = matrix;
