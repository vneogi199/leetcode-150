function minWindow(s: string, t: string): string {
  const charMap = new Map<string, number>();
  for (let i = 0; i < t.length; i++) {
    charMap.set(t[i], (charMap.get(t[i]) ?? 0) + 1);
  }
  let result = s;
  let left = 0;
  let right = 0;
  let isResultSet = false;
  let need = charMap.size;
  while (right < s.length) {
    left === 1 && right === 10 && console.log(left, right);
    const currentChar = s[right];
    if (charMap.has(currentChar)) {
      charMap.set(currentChar, (charMap.get(currentChar) ?? 0) - 1);
      if (charMap.get(currentChar) === 0) {
        need--;
      }
    }
    while (need === 0) {
      const currentResult = s.slice(left, right + 1);
      if (currentResult.length <= result.length) {
        result = currentResult;
        isResultSet = true;
      }
      if (charMap.has(s[left])) {
        charMap.set(s[left], (charMap.get(s[left]) ?? 0) + 1);
        if ((charMap.get(s[left]) ?? 0) === 1) {
          need++;
        }
      }
      left++;
    }
    right++;
  }
  return isResultSet === true ? result : "";
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
console.log(minWindow("aa", "aa"));
