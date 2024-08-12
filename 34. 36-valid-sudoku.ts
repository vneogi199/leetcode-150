function isValidSudoku(board: string[][]): boolean {
  const rows = new Array(9).fill(undefined).map(() => new Set());
  const cols = new Array(9).fill(undefined).map(() => new Set());
  const squares = new Array(3)
    .fill(undefined)
    .map(() => new Array(3).fill(undefined).map(() => new Set()));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === ".") {
        continue;
      }
      const squareRow = Math.floor(i / 3);
      const squareCol = Math.floor(j / 3);
      if (
        rows[i].has(board[i][j]) ||
        cols[j].has(board[i][j]) ||
        squares[squareRow][squareCol].has(board[i][j])
      ) {
        return false;
      }
      rows[i].add(board[i][j]);
      cols[j].add(board[i][j]);
      squares[squareRow][squareCol].add(board[i][j]);
    }
  }
  return true;
}

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);
console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);
