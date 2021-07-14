function solution(X, A) {
  const arr = new Array(X + 1).fill(null);
  arr[0] = 0;

  for (let i = 0; i <= A.length; i++) {
    arr[A[i]] = A[i];
    if (arr.findIndex((el) => el === null) === -1) {
      return i;
    }
  }
  return -1;
}
