## 94. Binary Tree Inorder Traversal

### 결과

| Try |   Date   | Time spent | Correctness | Performance |                             Code                              |
| :-: | :------: | :--------: | :---------: | :---------: | :-----------------------------------------------------------: |
|  1  | 21-07-20 |   못 품    |      -      |      -      | [🔗 결과](https://leetcode.com/submissions/detail/525359092/) |

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
