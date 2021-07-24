function solution(target, arr) {
  let [count, left, right, sum] = [0, 0, 0, arr[0]];

  while (left < arr.length) {
    if (sum < target) {
      if (right === arr.length - 1) break;
      sum += arr[++right];
    } else if (sum > target) {
      sum -= arr[left++];
    } else if (sum === target) {
      count++;
      if (right === arr.length - 1) break;
      sum = sum + arr[++right] - arr[left++];
    }
  }
  return count;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
