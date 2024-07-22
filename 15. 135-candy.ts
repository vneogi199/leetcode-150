function candy(ratings: number[]): number {
  const result = new Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      result[i] = result[i - 1] + 1;
    }
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      result[i] = Math.max(result[i + 1] + 1, result[i]);
    }
  }
  return result.reduce((a, b) => a + b, 0);
};

console.log(candy([1, 3, 2, 2, 1]))

