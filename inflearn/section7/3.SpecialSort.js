function solution(arr) {
  // 두 개의 배열을 준비
  // for문 돌면서 음수면 1번배열, 양수면 2번배열에 push
  // 두 배열을 concat
  const negatives = [];
  const positives = [];
  for (let num of arr) {
    if (num < 0) negatives.push(num);
    if (num > 0) positives.push(num);
  }
  return negatives.concat(positives);
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

function solution2(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(solution2([1, 2, 3, -3, -2, 5, 6, -6]));
