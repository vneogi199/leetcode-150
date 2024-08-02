
function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) {
    return false;
  }
  if (s.length === 0) {
    return true;
  }
  let left = 0;
  let right = 0;
  while (left < s.length && right < t.length) {
    if (s[left] === t[right]) {
      left++;
    }
    right++;
  }
  return left === s.length;
};

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
console.log(isSubsequence(' ', 'ahbgdc'));
console.log(isSubsequence('a', 'b'));
console.log(isSubsequence('abc', 'uuuuuuuabc'));
