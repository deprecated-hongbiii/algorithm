// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // K가 A 배열 길이의 배수인 경우는 A를 그대로 리턴
  if (K % A.length === 0) return A;

  // K가 A의 길이보다 크다면, 나눈 나머지만큼만 회전시키면 됨
  if (K > A.length) K = K % A.length;

  return [...A.slice(A.length - K), ...A.slice(0, A.length - K)];
}

console.log(solution([3, 8, 9, 7, 6], 3));

const bbukku = [1, 2, 3, 4, 5];
console.log(bbukku.slice(2, -1));
