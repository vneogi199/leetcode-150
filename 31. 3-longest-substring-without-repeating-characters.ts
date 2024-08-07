function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let left = 0;
  let right = 0;
  let characterSet = new Set<string>();
  while (left < s.length && right < s.length) {
    if (characterSet.has(s[right])) {
      characterSet.delete(s[left]);
      left++;
      continue;
    }
    characterSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
