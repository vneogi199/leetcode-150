function fullJustify(words: string[], maxWidth: number): string[] {
  const result: string[] = [];
  let currentLine: string[] = [];
  let lineLengthWithoutSpaces = 0;
  for (let i = 0; i < words.length; i++) {
    // Case 1. line complete
    if (lineLengthWithoutSpaces + currentLine.length + words[i].length > maxWidth) {
      const spacesToFill = maxWidth - lineLengthWithoutSpaces;
      const spacesForAll = spacesToFill / Math.max(1, (currentLine.length - 1));
      let greedySpaces = spacesToFill % Math.max(1, (currentLine.length - 1));

      // Math.max(1, ...) to handle case where there is only one word
      for (let j = 0; j < Math.max(1, (currentLine.length - 1)); j++) {
        currentLine[j] += ' '.repeat(spacesForAll);
        if (greedySpaces > 0) {
          currentLine[j] += ' ';
          greedySpaces--;
        }
      }
      result.push(currentLine.join(""));

      currentLine = [];
      lineLengthWithoutSpaces = 0;
      //continue;
    }
    // Case 2. line not complete
    currentLine.push(words[i]);
    lineLengthWithoutSpaces += words[i].length;
  }

  // Handle last line since it is not handled by the loop
  const lastLine = currentLine.join(' ');
  result.push(lastLine + ' '.repeat(maxWidth - lastLine.length));
  return result;
}


console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))

