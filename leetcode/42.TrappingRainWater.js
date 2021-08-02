/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const maxHeight = Math.max(...height);
  const maxHeightIdx = height.indexOf(maxHeight);

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let trapped = 0;

  while (left < maxHeightIdx) {
    const currHeight = height[left];
    leftMax = Math.max(leftMax, currHeight);
    trapped += leftMax - currHeight;
    left++;
  }

  while (right > maxHeightIdx) {
    const currHeight = height[right];
    rightMax = Math.max(rightMax, currHeight);
    trapped += rightMax - currHeight;
    right--;
  }

  return trapped;
};
