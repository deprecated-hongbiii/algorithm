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
