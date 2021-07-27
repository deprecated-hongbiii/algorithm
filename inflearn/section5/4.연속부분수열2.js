function solution(m, arr) {
  let l = 0;
  let sum = 0;
  let count = 0;

  for (let r = 0; r < arr.length; r++) {
    sum += arr[r];
    if (sum <= m) {
      count += r - l + 1;
    }
    if (sum > m) {
      while (sum > m) {
        sum -= arr[l++];
      }
      if (r >= l) count += r - l + 1;
    }
  }
  return count;
}

console.log(solution(5, [1, 3, 1, 2, 3]));
console.log(solution(100, [10, 5, 2, 6]));
console.log(solution(5, [1, 1, 1, 1]));
