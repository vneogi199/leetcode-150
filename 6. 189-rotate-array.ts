function rotate(nums: number[], k: number): void {
  if (k === 0 || nums.length === 1) return;
  const rotateIterations = k % nums.length;
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }
  l = 0;
  r = rotateIterations - 1;
  while (l < r) {
    const temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }
  l = rotateIterations;
  r = nums.length - 1;
  while (l < r) {
    const temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }
};

const nums = [1, 2, 3, 4, 5, 6, 7]
rotate(nums, 3);
console.log(nums);
