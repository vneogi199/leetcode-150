/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let rowZero = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        if (i === 0) {
          rowZero = true;
        } else {
          matrix[i][0] = 0;
        }
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0 && (matrix[0][j] === 0 || matrix[i][0] === 0)) {
        matrix[i][j] = 0;
      }
    }
  }
  if (matrix[0][0] === 0) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
  if (rowZero === true) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }
}

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroes(matrix);
console.log(matrix);
