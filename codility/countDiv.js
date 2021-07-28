function solution(A, B, K) {
  if (A % K === 0) {
    if (A === B) return 1;
    else return Math.floor(B / K) - Math.floor(A / K) + 1;
  }

  return Math.floor(B / K) - Math.floor(A / K);
}
