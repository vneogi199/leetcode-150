function productExceptSelf(nums: number[]): number[] {
  const results: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      results.push(1);
    }
    else {
      results.push(results[i - 1] * nums[i - 1]);
    }
  }
  let prod = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i !== nums.length - 1) {
      results[i] = results[i] * prod;
    }
    prod = nums[i] * prod;
  }
  return results;
};

console.log(productExceptSelf([1, 2, 3, 4]));
