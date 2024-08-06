function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let right = 0;
  let minLengthSubArr = Infinity;

  let sum = 0;
  while (left < nums.length && right < nums.length) {
    sum += nums[right];
    while (sum >= target) {
      // keep moving left until sum < target
      minLengthSubArr = Math.min(minLengthSubArr, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return minLengthSubArr === Infinity ? 0 : minLengthSubArr;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
