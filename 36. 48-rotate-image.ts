/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  let l = 0;
  let r = matrix.length - 1;
  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      let top = l;
      let bottom = r;
      // save top left
      let topLeft = matrix[top][l + i];
      // move bottom left to top left
      matrix[top][l + i] = matrix[bottom - i][l];
      // move bottom right to bottom left
      matrix[bottom - i][l] = matrix[bottom][r - i];
      // move top right to bottom right
      matrix[bottom][r - i] = matrix[top + i][r];
      // move top left to top right
      matrix[top + i][r] = topLeft;
    }
    l++;
    r--;
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix);
console.log(matrix);
const matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotate(matrix2);
console.log(matrix2);
