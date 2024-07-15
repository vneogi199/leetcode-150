function removeElement(nums: number[], val: number): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      continue;
    }
    nums[k] = nums[i];
    k++;
  }
  return k;
};


const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
const result = removeElement(nums, val);
console.log(nums, result);
