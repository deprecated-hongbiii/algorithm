function solution(k, arr) {
  // 슬라이딩 윈도우
  let sum = arr.slice(0, k).reduce((prev, acc) => prev + acc, 0);
  let maxSum = sum;
  let l = 0;

  for (let r = k; r < arr.length; r++) {
    const currSum = sum - arr[l++] + arr[r];
    maxSum = Math.max(currSum, maxSum);
    sum = currSum;
  }

  return maxSum;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
