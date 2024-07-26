function lengthOfLastWord(s: string): number {
  let wordLength = 0;
  let gotWord = false;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      wordLength++;
      gotWord = true;
    }
    else if (gotWord) {
      break;
    }
  }
  return wordLength;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord(" World   "));
console.log(lengthOfLastWord(" World"));
console.log(lengthOfLastWord("World"));
console.log(lengthOfLastWord("  fly me   to   the moon  "));
