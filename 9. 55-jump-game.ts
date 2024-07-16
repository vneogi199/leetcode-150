function canJump(nums: number[]): boolean {
  if (nums.length === 1) { return true; }

  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxReach < i) { return false; }
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;

  // let goal = nums.length - 1;
  // for (let i = nums.length - 1; i >= 0; i--) {
  //   if (i + nums[i] >= goal) {
  //     goal = i;
  //   }
  // }
  // return goal === 0;
};

console.log(canJump([2, 3, 1, 1, 4]));
