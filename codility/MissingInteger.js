function solution(A) {
  const sorted = A.sort((a, b) => a - b);
  if (sorted[A.length - 1] <= 0) return 1;

  if (sorted[0] > 1) return 1;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] >= 0 && sorted[i + 1] - sorted[i] > 1) {
      return sorted[i] + 1;
    }
  }
  return sorted[A.length - 1] + 1;
}
