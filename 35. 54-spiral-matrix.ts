function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];
  let l = 0;
  let r = matrix[0].length;
  let t = 0;
  let b = matrix.length;
  while (l < r && t < b) {
    // traverse left to right
    for (let i = l; i < r; i++) {
      result.push(matrix[t][i]);
    }
    t++;
    // traverse top to bottom
    for (let i = t; i < b; i++) {
      result.push(matrix[i][r - 1]);
    }
    r--;
    if (!(l < r && t < b)) {
      break;
    }
    // traverse right to left
    for (let i = r - 1; i >= l; i--) {
      result.push(matrix[b - 1][i]);
    }
    b--;
    // traverse bottom to top
    for (let i = b - 1; i >= t; i--) {
      result.push(matrix[i][l]);
    }
    l++;
  }
  return result;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
);
console.log(spiralOrder([[1, 2, 3, 4]]));
console.log(spiralOrder([[1], [2], [3], [4]]));
