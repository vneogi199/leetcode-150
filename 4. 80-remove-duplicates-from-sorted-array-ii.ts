function removeDuplicates(nums: number[]): number {
  if (nums.length < 3) { return nums.length; }
  let k = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};


const nums = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
const result = removeDuplicates(nums)
console.log(nums, result)
