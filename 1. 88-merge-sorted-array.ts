/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (!n) {
    return;
  }
  if (!m) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
    return;
  }
  const totalLength = nums1.length;
  for (let idxToSet = totalLength - 1; idxToSet >= 0; idxToSet--) {
    const mIdx = m - 1;
    const nIdx = n - 1;
    if (mIdx < 0) {
      for (let i = 0; i < n; i++) {
        nums1[i] = nums2[i];
      }
      return;
    }
    if (nIdx < 0) {
      return;
    }
    const n1 = nums1[mIdx];
    const n2 = nums2[nIdx];
    if (n1 > n2) {
      nums1[idxToSet] = n1;
      m--;
    } else {
      nums1[idxToSet] = n2;
      n--;
    }
  }
}

const num1 = [1, 2, 3, 0, 0, 0];
const num2 = [2, 5, 6];
merge(num1, 3, num2, 3);
console.log(num1);
