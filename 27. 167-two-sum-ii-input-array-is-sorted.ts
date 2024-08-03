function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  while (true) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      break;
    }
    else if (sum > target) {
      right--;
    }
    else {
      left++;
    }
  }
  return [left + 1, right + 1];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
