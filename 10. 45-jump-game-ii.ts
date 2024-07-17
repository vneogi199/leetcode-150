function jump(nums: number[]): number {
  if (nums.length === 1) { return 0; }

  let jumpsRequired = 0;
  let l = 0;
  let r = 0;
  while (r < nums.length - 1) {
    let right = 0;
    for (let i = l; i <= r; i++) {
      right = Math.max(right, i + nums[i]);
    }
    jumpsRequired++;
    l = r + 1;
    r = right;
  }
  return jumpsRequired;
};

console.log(jump([2, 3, 1, 1, 4]));
