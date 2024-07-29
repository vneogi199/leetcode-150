function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  let result = '';
  const increment = (numRows - 1) * 2;
  for (let r = 0; r < numRows; r++) {
    for (let i = r; i < s.length; i += increment) {
      result += s[i];
      const diagonalIndex = i + increment - 2 * r;
      if (r > 0 && r < numRows - 1 && diagonalIndex < s.length) {
        result += s[diagonalIndex];
      }
    }

  }
  return result;
};

console.log(convert("PAYPALISHIRING", 4));
