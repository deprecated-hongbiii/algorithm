# 🟢 Easy 🟢

## 110. Balanced Binary Tree

| Try |   Date   | Time spent | Correctness | Performance |                             Code                              |
| :-: | :------: | :--------: | :---------: | :---------: | :-----------------------------------------------------------: |
|  1  | 21-09-24 |     -      |    100%     |      -      | 🔗 [결과](https://leetcode.com/submissions/detail/560055293/) |

### 1st try

- height-balanced 라는 게 무슨 뜻인지 몰라서 해당 개념에 대해 간단히 학습했다. [참고한 블로그](https://javascript.plainenglish.io/leetcode-110-balanced-binary-tree-javascript-49ec9ddf9318)
- 재귀로 쭉쭉 들어가서 leaf 노드부터 확인해나가야 해서 DFS로 풀어야겠다는 생각이 들었다.
- 그러면 재귀 함수를 어떻게 짤까? `1. 재귀 탈출 조건` `2. return 값` `3. 정답 도출` 이렇게 나눠서 생각해봤다.
  1. 재귀 탈출 조건
     - 최초에 root 노드를 인자로 넣어 호출할 거고, 이진 트리이기 때문에 재귀로 node.left, node.right를 넣어 호출할 것이다.
     - 즉, 인자로 들어온 node 값이 null 일 경우 리턴을 해준다.
     - 이 때 height 계산을 해야 하기 때문에 리턴값은 1로 한다.
     - 👆 이 부분 때문에 원래 leaf 노드라면 height 값이 1이 되어야 하지만 내 풀이에서는 2가 되었다.
  2. return 값
     - 재귀 함수가 리턴 되며 부모 노드로 올라가면서 height 값으로 비교하며 판단해야 하므로 리턴값은 height 값이어야 한다.
     - 특정 노드의 height(`currHeight`)는 좌, 우 노드의 height 중 더 큰 값에 `+1` 한 값이다.
  3. 정답 도출
     - 좌, 우 노드를 넣어 재귀호출한 리턴값을 변수 `leftHeight`, `rightHeight`에 담아둔다.
     - 만약 두 값 중 하나라도 false이면 그 단계의 dfs 함수는 false를 리턴한다.
     - 값이 false가 되는 조건은, `leftHeight`와 `rightHeight`의 차이가 1 이상인 경우이다.
     - 언젠가 한 번이라도 false가 나오게 되면 재귀함수가 콜스택에서 pop되면서 모두 각각의 함수가 모두 false를 리턴하게 되고, 최종적으로도 false를 리턴한다.
     - 그렇지 않으면 (=== height-balanced라면) `currHeight`를 리턴값으로 갖는다. 즉 자연수를 리턴값으로 갖는다.
     - 따라서 dfs 함수의 리턴값을 `result` 변수에 담아두고, 그 값이 있으면 true, 없으면 (false이면) false를 반환하도록 했다.

### 다른 풀이

- `check` 라는 플래그를 하나 만들어서, 좌우 노드의 height 차이가 1 이상이면 check를 false로 바꾼다.
- dfs 내에서는 `check`가 false일 경우 리턴해주도록 한다.
- 최종 리턴값은 `check`인데, dfs가 얼마나 많이 호출되었는지에 상관 없이 `check`는 dfs 바깥에 정의되어 있으므로 스코프체인으로 쭉쭉 가서 다들 똑같은 `check` 변수를 확인한다.

<details>
  <summary>큐의 풀이</summary>
  <div markdown="1">

```js
var isBalanced = function (root) {
  if (!root) return true;

  let check = true;
  function dfs(node) {
    if (!node) return 0; // 비었을 경우 리턴
    if (!check) return; // check가 false 얼리리턴

    const leftNode = dfs(node.left);
    const rightNode = dfs(node.right);
    const diff = Math.abs(leftNode - rightNode);
    if (diff > 1) return (check = false); // 균형 이진 트리가 아닐 경우 check를 false
    return Math.max(leftNode, rightNode) + 1; // 높이 체크
  }

  dfs(root);
  return check;
};
```

  </div>
</details>

<br>

## 42. Trapping Rain Water

| Try |   Date   | Time spent | Correctness | Performance |                             Code                              |
| :-: | :------: | :--------: | :---------: | :---------: | :-----------------------------------------------------------: |
|  1  | 21-08-03 |     -      |    100%     |      -      | 🔗 [결과](https://leetcode.com/submissions/detail/532145840/) |

### 풀이 방법

- 얼핏 투포인터 알고리즘이라고 들은 것 같아서 생각해봤는데 잘 모르겠어서 [구디의 글](https://velog.io/@goody/LC-%EB%B9%97%EB%AC%BC-%EA%B0%80%EB%91%90%EA%B8%B0)을 참고함
- 가장 높이가 높은 블럭의 높이 값과 인덱스(a)를 구한다.
- left 포인터는 제일 왼쪽부터, right 포인터는 제일 오른쪽부터 (a)에 도달할 때까지 ++, -- 해주며 계산
- 포인터가 지나가면서 가장 높이가 높은 값을 저장한다. (b)
- 가장 높이가 높은 블럭이 있다는 것을 알고 있기 때문에 (b)와 현재 포인터 위치의 높이의 차이만큼 빗물이 가둬진다.
- (a)를 기준으로 왼쪽 while문, 오른쪽 while문 돌면 끝~

<br>

## 94. Binary Tree Inorder Traversal

| Try |   Date   | Time spent | Correctness | Performance |                             Code                              |
| :-: | :------: | :--------: | :---------: | :---------: | :-----------------------------------------------------------: |
|  1  | 21-07-20 |   못 품    |      -      |      -      | 🔗 [결과](https://leetcode.com/submissions/detail/525359092/) |

### 풀이 방법

- DFS 아직 잘 모르겠어서 못 풀었다.
- root.left가 있으면.. 어떤 일을 하고? root.right가 있으면.. 어떤 일을 하고? 이런 식으로 생각해 봄
- 다른 사람의 답안을 보니 김태원 선생님 처럼 풂
- 내가 생각한 거랑 좀 비슷하게 푼 풀이도 있었음 (다른 풀이에 첨부)

### 다른 풀이

<details>
  <summary>root.left, root.right 가 있는지에 따라 풀이한 답</summary>
  <div markdown="1">

```js
var inorderTraversal = function (root) {
  var res = [];
  helper(root, res);
  return res;
};

var helper = function (root, res) {
  if (!root) return;
  if (root.left) helper(root.left, res);
  res.push(root.val);
  if (root.right) helper(root.right, res);
};
```

  </div>
</details>

<br>

## 841. Keys And Rooms

### 1st try

- 도저히 모르겠어서 큐의 도움을 받아서 과정을 따라가 봄
- while로 풀어도 되고 재귀로 풀어도 됨. 물론 BFS 풀이도 가능
- 고려해야 할 점
  - dfs가 최종적으로 리턴해주는 것이 무엇인지
  - 어떤 경우에 dfs를 빠져나올 건지 (이 문제의 경우에는 이미 방문한 경우에 return)
  - 인자로 어떤 걸 넣어줄 건지
- 어렵다.. DFS..

<br>

## 1047. Remove All Adjacent Duplicates In String

| Try |   Date   | Time spent | Correctness | Performance |                             Code                              |
| :-: | :------: | :--------: | :---------: | :---------: | :-----------------------------------------------------------: |
|  1  | 21-08-05 |     -      |    100%     |      -      | 🔗 [결과](https://leetcode.com/submissions/detail/533779523/) |

<br>

## 1209. Remove All Adjacent Duplicates in String II

| Try |   Date   | Time spent | Correctness |     Performance     |                             Code                              |
| :-: | :------: | :--------: | :---------: | :-----------------: | :-----------------------------------------------------------: |
|  1  | 21-08-05 |     -      |   18 / 20   | Time Limit Exceeded | 🔗 [결과](https://leetcode.com/submissions/detail/533798437/) |
|  2  | 21-08-06 |     -      |   20 / 20   |  faster than 7.73%  | 🔗 [결과](https://leetcode.com/submissions/detail/534007180/) |
|  3  | 21-08-06 |     -      |   20 / 20   | faster than 85.87%  | 🔗 [결과](https://leetcode.com/submissions/detail/534012407/) |

### 1st try

- k개가 연속되었는지 확인을 for문 안에 또 for문을 만들어서 했다. 시간복잡도 `O(N*K)`
- 이렇게 하는 게 아닌 것 같았는데 더 좋은 방법이 안 떠올라서.. 😭
- 역시나 시간초과가 나와버렸다.

### 2nd try

- `O(N)` 으로 푸는 방법이 생각나지 않아서 [코없프](https://www.youtube.com/watch?v=EU7ISz76xjw&list=PLDV-cCQnUlIYQOb8_n-d-VPhl_X6cECjg&index=4) 영상을 봤다.
- 나름 영상에 나온 방식대로 잘 풀었다고 생각했는데 하위 7.73%...... 🤔
- 스택을 하다 더 만들어서 연속 숫자의 개수를 카운팅하는 방식이다.
- k개 연속된 숫자가 나온다면 반복문 돌며 pop해주는 대신 slice 메서드를 이용해 잘라냈는데 이게 문제인 것 같다.

### 3rd try

- slice 메서드를 없애고 for문으로 스택에서 k-1개의 원소를 pop하는 방식으로 풀었더니 훨씬 빨라졌다.
- ECMA 스펙에는 시간복잡도에 대한 내용은 나와있지 않지만 대충 추측해봤을 때 얕은 복사하여 반환하기 때문에 O(N)의 시간복잡도를 갖는다.
- 중간에 인덱스로 자른다고 해도.. 그 길이만큼 새로운 배열을 만들어내기 때문에 자르는 길이를 K라고 한다면 O(K)일 것이다.
- 사실상 for문이랑 시간복잡도는 같아 보이는데.. 무슨 차이일까?
- 네이스 왈 데이터가 어떻게 들어오냐에 따라, 그리고 복사냐(slice) 아니냐(for문) 차이에 따라 성능 차이가 나는 것 같다고 한다.
- 그렇다면 원본 배열을 직접 변경하는 splice 메서드를 쓴다면 어떨까??!
- 결과는 for문과 비슷하다! 런타임도 메모리도 모두 비슷!
- 결론! 원본 배열을 복사해서 반환하는 메서드는 시간복잡도가 더 증가한다.
