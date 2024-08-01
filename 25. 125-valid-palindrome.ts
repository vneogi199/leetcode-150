function isAlphanumeric(char: string) {
  return char.match(/[a-z0-9]/i);
}
function isPalindrome(s: string): boolean {
  if (s.length === 1) {
    return true;
  }
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    const left = s[i].toLowerCase();
    const right = s[j].toLowerCase();
    const isLeftAlphanumeric = isAlphanumeric(left);
    const isRightAlphanumeric = isAlphanumeric(right);
    if (isLeftAlphanumeric && isRightAlphanumeric && left !== right) {
      return false;
    }
    if (!isLeftAlphanumeric) {
      i++;
      continue;
    }
    if (!isRightAlphanumeric) {
      j--;
      continue;
    }
    i++;
    j--;
  }
  return true;
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));
