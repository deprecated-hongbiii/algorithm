function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    const sliced = arr.slice(i + 1);
    const minValueIdx = arr.indexOf(Math.min(...sliced));
    if (arr[i] > arr[minValueIdx]) {
      [arr[i], arr[minValueIdx]] = [arr[minValueIdx], arr[i]];
    }
  }
  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
console.log(solution([48, 3, 75, 34, 10, 5]));
