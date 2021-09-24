var isBalanced = function (root) {
  /**
   * 어떤 노드가 height-balanced라는 것은
   * 그 노드의 왼쪽, 오른쪽 sub tree가 모두 height-balanced라는 것이다.
   * 그렇게 따져가다 보면 재귀로 쭉쭉 들어가서 leaf 노드를 가장 먼저 확인해야 한다.
   * 자식 노드가 없으면 (=== leaf 노드이면) height은 1이다.
   */
  function dfs(node) {
    if (node === null) return 1;

    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);
    if (!leftHeight || !rightHeight) return false;

    const currHeight = Math.max(leftHeight, rightHeight) + 1;
    if (Math.abs(leftHeight - rightHeight) > 1) return false;

    return currHeight;
  }

  const result = dfs(root);
  return result ? true : false;
};

// 트리를 만들기 위한 코드
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

console.log(isBalanced(root));
