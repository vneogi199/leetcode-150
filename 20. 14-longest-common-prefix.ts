function longestCommonPrefix(strs: string[]): string {
  let result = "";
  if (strs.length === 1) {
    return strs[0];
  }
  for (let i = 0; i < strs[0].length; i++) { // charIndex
    for (let j = 0; j < strs.length; j++) { // stringIndex
      if (i === strs[j].length || strs[j][i] !== strs[0][i]) {
        return result;
      }
    }
    result += strs[0][i];
  }
  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
