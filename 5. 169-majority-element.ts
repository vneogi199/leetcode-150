function majorityElement(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  // brute force approach using map
  // const countObj: Record<number, number> = {};
  // nums.forEach(n => {
  //   if (countObj[n]) {
  //     countObj[n] += 1;
  //   } else {
  //     countObj[n] = 1;
  //   }
  // });
  // let max = 0;
  // let result = 0;
  // Object.entries(countObj).forEach(([n, c]) => {
  //   if (c > max) {
  //     max = c;
  //     result = Number(n);
  //   }
  // });
  // return result;


  // without extra data structure
  let count = 1;
  let majority = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === majority) {
      count++;
    }
    else {
      count--;
      if (count === 0) {
        majority = nums[i];
        count = 1;
      }
    }
  }
  return majority;
};

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
