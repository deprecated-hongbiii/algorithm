## 1. 재귀함수

(21.07.14)

- 재귀함수 기초
- 재귀함수에 엄~청 약한데 한 단계씩 해보자 👊
- 재귀함수는 결국 콜스택에 쭉 쌓여서 마지막부터 처음까지 하나씩 pop되며 실행된다는 것을 기억하기
- 종료 조건 (return) 잘 확인
- [stack frame](http://tcpschool.com/c/c_memory_stackframe)
  - 스택 영역에 차례대로 저장되는 함수의 호출 정보
  - 매개변수, 지역변수, 호출이 끝난 뒤 돌아갈 주소값

<br>

## 2. 재귀함수를 이용한 이진수 출력

(21.07.19)

- 재귀를 써서 풀이가 가능할 거라는 느낌은 왔음
- 리턴하면서 문자열로 어떻게 합치지 이런 생각이 들어서 못 풂..
- 빈 문자열을 만들고 거기에 붙여나가면 되는 것이었다.
- 꼭 값을 리턴하지 않아도 된다는 것. map, filter 이런 함수들처럼 꼭 리턴해야 된다고 생각을 했었음 😑

### 선생님 풀이

```js
function solution(n) {
  let answer = '';
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += n % 2;
    }
  }
  DFS(n);
  return answer;
}
```
