function solution(X, A) {
  // A[K] 뜻 : 시간 K에 떨어진 나뭇잎의 위치
  // 개구리는 모든 위치에 나뭇잎이 다 나타났을 때만 강을 건널 수 있다. 1~X 위치!
  // 초기 위치 0부터 X+1까지 이동해야 함
  // 즉 1~X가 다 나타나는 최소 K를 구하라
  // 1~X가 다 나타나지 않으면 (= 강을 건널 수 없으면) -1 을 리턴

  // 길이가 X인 배열 만들어서 null을 다 넣어놓는다
  // X범위를 순회하면서 A[X]를 위 배열에 하나씩 넣고 null이 없는지 체크 (이 과정 자체가 N^2)
  const arr = new Array(X + 1).fill(null);
  arr[0] = A[0];

  for (let i = 1; i <= X + 1; i++) {
    arr[A[i]] = A[i];
    if (arr.findIndex((el) => el === null) === -1) {
      return i;
    }
  }
  return -1;
}
