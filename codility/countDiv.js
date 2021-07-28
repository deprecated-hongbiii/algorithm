function solution(A, B, K) {
  let count = 0;
  for (let i = A; i <= B; i++) {
    if (i % K === 0) count++;
  }
  return count;
}
