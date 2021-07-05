## 타겟넘버

(2021.07.05)

- 도대체 어떻게 dfs로 풀어야 하는 건지 모르겠다.

### 포인트

- 왜 DFS/BFS냐?
  - 모든 경우를 다 구해봐야 하는 문제이다. 어떻게 더하고 빼야 타겟 넘버가 될 지 모르니까
  - 각각의 인덱스에 있는 숫자를 더하거나 빼는 두 가지 경우가 존재하는데, 이것을 그려보면 트리 모양이 된다. 그리고 leaf 노드들이 바로 주어진 숫자 배열을 가지고 만든 모든 경우의 수이다.
  - DFS든 BFS든 모든 leaf까지 다 가보고, 타겟 넘버와 일치하는 노드의 개수를 세어 주면 된다.
- 아래 코드를 보면서 이해해보려고 했다. 느낌적인 느낌은 알겠는데 내가 스스로 짤 수 있을까 😭
```js
function solution(numbers, target) {
  var answer = 0;

  function dfs(depth, sum) {
    if (depth === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }
    dfs(depth + 1, sum + numbers[depth]); // 왼쪽
    dfs(depth + 1, sum - numbers[depth]); // 오른쪽
  }

  dfs(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
```
