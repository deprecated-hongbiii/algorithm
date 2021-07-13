function solution(A) {
  // A의 원소 범위는 -1000 ~ 1000 음수도 있음
  // A의 길이는 2부터 10만까지
  // 최소 차이를 구하려면 다~ 구해봐야 함!
  const diffs = [];
  let sum1 = A[0];
  let sum2 = A.reduce((prev, curr) => prev + curr) - sum1;
  diffs.push(Math.abs(sum1 - sum2));

  for (let i = 1; i <= A.length - 2; i++) {
    sum1 += A[i];
    sum2 -= A[i];
    diffs.push(Math.abs(sum1 - sum2));
  }

  return Math.min(...diffs);
}
