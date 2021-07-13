function solution(A) {
  // A의 원소 범위는 -1000 ~ 1000 음수도 있음
  // A의 길이는 2부터 10만까지
  // 최소 차이를 구하려면 다~ 구해봐야 함!
  const diffs = [];
  for (let p = 1; p <= A.length - 1; p++) {
    const part1 = A.slice(0, p);
    const part2 = A.slice(p, A.length);
    const sum1 = part1.reduce((prev, sum) => prev + sum, 0);
    const sum2 = part2.reduce((prev, sum) => prev + sum, 0);
    diffs.push(Math.abs(sum1 - sum2));
  }
  return Math.min(...diffs);
}
