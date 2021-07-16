function solution(A) {
  // perm이면 1, 아니면 0 리턴
  const sorted = A.sort();
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== i + 1) return 0;
  }
  return 1;
}
