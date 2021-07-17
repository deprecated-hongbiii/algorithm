function solution(N, A) {
  // A 배열에는 1~N+1 범위의 숫자가 들어있는데,
  // 1~N 나오면 1~N번째 카운트를 +1 하면 되고
  // N+1 나오면 제일 큰 카운트로 모든 숫자를 맞춘다
  let arr = new Array(N).fill(0);
  let max = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      arr[A[i] - 1] += 1;
      max = arr[A[i] - 1] > max ? arr[A[i] - 1] : max;
    }
    if (A[i] === N + 1) {
      arr = new Array(N).fill(max);
    }
  }
  return arr;
}
