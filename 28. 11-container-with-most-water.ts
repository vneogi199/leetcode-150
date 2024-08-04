function maxArea(height: number[]): number {
  let areaMax = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const widthContainer = right - left;
    let heightContainer = 0;
    if (height[left] < height[right]) {
      heightContainer = height[left];
      left++;
    } else {
      heightContainer = height[right];
      right--;
    }
    const area = widthContainer * heightContainer;
    if (area > areaMax) {
      areaMax = area;
    }
  }
  return areaMax;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
