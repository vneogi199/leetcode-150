function findSubstring(s: string, words: string[]): number[] {
  const result: number[] = [];
  const originalWordsMap = new Map<string, number>();
  words.forEach((word) => {
    if (originalWordsMap.has(word)) {
      originalWordsMap.set(word, originalWordsMap.get(word)! + 1);
    } else {
      originalWordsMap.set(word, 1);
    }
  });
  const wordLength = words[0].length;

  let left = 0;
  let right = left;
  let copyWordsMap = new Map<string, number>(originalWordsMap);
  while (left < s.length && right < s.length) {
    const currentWord = s.slice(right, right + wordLength);
    const currentWordCount = copyWordsMap.get(currentWord);
    if (currentWordCount !== undefined && currentWordCount > 0) {
      if (currentWordCount === 1) {
        copyWordsMap.delete(currentWord);
      } else {
        copyWordsMap.set(currentWord, currentWordCount - 1);
      }
      right += wordLength;
    } else {
      left++;
      right = left;
      copyWordsMap = new Map<string, number>(originalWordsMap);
    }
    if (copyWordsMap.size === 0) {
      result.push(left);
    }
  }
  return result;
}

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
console.log(
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]),
);
console.log(
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]),
);
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
