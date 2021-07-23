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

<br>

## 3. 이진트리순회 (DFS)

(21.07.20)

- DFS 뭘 모르겠으면 일단 `if ~ else` 문을 쓰라는 게 선생님의 팁! 이렇게라도 하세요!!!!!! 라고 하심
- `if` 에는 종료 조건 (return) 을 넣어주고, `else` 에는 재귀함수 호출
- 트리 구조에서는 두 갈래로 나가야 하니까 `else` 문에 두 번 호출을 해주면 되는 것이다.
- 내가 봐왔던 트리 구조는 class로 정의된 node 구조여서 어떻게 하라는 건지 몰랐다. 주어진 그림에서 규칙을 찾아보면 왼쪽 자식 노드는 `부모노드 값 * 2`, 오른쪽 자식 노드는 `부모노드 값 * 2 + 1` 이라는 점을 이용하여 출력하라는 것이었다.

### 선생님 풀이

```js
// 1부터 7까지
function solution(v) {
  function DFS(v) {
    if (v > 7) return;
    else {
      console.log(v); // console.log의 위치를 옮기면 preorder, inorder, postorder 구현 가능
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
}

solution(1);
```

<br>

## 5. 합이 같은 부분집합

(21.07.23)

- 처음 문제를 봤을 때는 어떻게 DFS로 풀 수 있을까... 생각했음
- 생각하다보니 문득 타겟넘버랑 비슷하다는 느낌이 빡!!!
- 타겟넘버는 다음 원소를 더하거나 빼거나이지만 이 문제는 더하거나 더하지 않거나 이렇게 두 가지로 트리구조처럼 뻗어나감
- 접근은 맞았지만 코드로 어떻게 써야 하는지 또 감이 안 잡힘
- 타겟넘버 필기를 다시 보고 depth를 활용해야 한다는 걸 되새김

### 실수 기록

- 전반적으로 단계마다 어떤 값이 들어가야 할 지 헷갈려했던 게 문제
- dfs 함수를 맨 처음에 호출할 때 sum에 `arr[0]`을 넣음
- 재귀 첫번째 호출 (14라인) 때 `sum + arr[depth + 1]` 이라고 씀
- 사실 위와 같이 쓴 것은 잘못한 건 아님. 초기값을 0으로 보냐 첫번째 원소로 보냐의 차이니까
- 결정적인 실수는 if문 안에서 `return 'YES'` 라고 쓴 것
- 이렇게 쓰면 해당 함수 하나만 리턴되는 것이므로 전체 재귀 탐색이 끝나지도 않을 뿐더러 정답으로 YES가 리턴되지도 않는다.
- 정확한 방법은 answer에 초기값 `'NO'` 를 넣어두고 조건이 만족했을 때 `YES` 로 바꿔주는 것

### 알아둘 점

- `flag` 변수를 하나 만들어서 0으로 초기화, 1이 되면 조건이 만족됐다는 뜻으로 함수 리턴시키기.
  - 조건을 만족하면 더 이상 재귀를 더 돌릴 필요가 없으므로 탐색을 중단하기 위한 목적!
  - `flag` 변수를 두지 않아도 `if(answer === 'YES') return;`이렇게도 쓸 수 있을 듯

### 선생님 풀이

```js
function solution(arr) {
  let answer = 'NO';
  let flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;

  function DFS(L, sum) {
    // L은 Level, 즉 depth라는 뜻
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
```
