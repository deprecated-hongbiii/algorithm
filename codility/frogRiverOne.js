function solution(X, A) {
  const set = new Set();
  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
    if (set.size === X) return i;
  }
  return -1;
}
