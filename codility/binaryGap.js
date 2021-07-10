// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  // 정수 N을 이진수로 바꾼다.
  const bin = N.toString(2);
  const oneIdxs = bin
    .split('')
    .map((bit, i) => {
      if (bit === '1') {
        return i;
      } else {
        return null;
      }
    })
    .filter((idx) => idx !== null);

  if (oneIdxs.length === 1) return 0;

  let maxCount = 0;
  for (let i = 1; i < oneIdxs.length; i++) {
    maxCount = Math.max(maxCount, oneIdxs[i] - oneIdxs[i - 1] - 1);
  }

  return maxCount;
}

console.log(solution(32));
console.log(solution(9));
