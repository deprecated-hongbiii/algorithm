function solution(A) {
  const sorted = A.sort((a, b) => a - b);

  // 맨 첫번째나 맨 마지막 숫자가 없을 경우
  if (sorted[0] !== 1) return 1;
  if (sorted[sorted.length - 1] === sorted.length) return sorted.length + 1;

  // 일반적인 경우
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] !== 1) return sorted[i] - 1;
  }
}
