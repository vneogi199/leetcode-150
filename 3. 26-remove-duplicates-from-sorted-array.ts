function removeDuplicates(nums: number[]): number {
  if (nums.length === 1) { return 1; }
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      // duplicate
    } else {
      // unique
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result = removeDuplicates(nums)
console.log(nums, result);
