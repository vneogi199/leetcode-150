function hIndex(citations: number[]): number {
  const sorted = citations.sort((a, b) => b - a);
  const idx = sorted.findIndex((citation, idx) => citation <= idx);
  return idx !== -1 ? idx : sorted.length;
};

console.log(hIndex([0, 1, 3, 5, 6]))
