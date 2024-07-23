function trap(height: number[]): number {
  if (height.length < 3) return 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];

  let total = 0;

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      total += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      total += rightMax - height[right];
    }
  };
  return total;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
