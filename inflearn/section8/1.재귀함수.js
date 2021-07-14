// 자연수 n이 입력되면 재귀함수를 이용하여 1~N 출력
function solution(n) {
  function print(n) {
    if (n > 1) print(n - 1);
    console.log(n);
  }
  print(n);
}

solution(10);
