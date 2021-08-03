function solution(board, moves) {
  let count = 0;
  const stack = [];

  for (let move of moves) {
    for (let i = 0; i < board.length; i++) {
      const elem = board[i][move - 1];

      if (elem) {
        if (stack[stack.length - 1] === elem) {
          stack.pop();
          board[i][move - 1] = 0;
          count += 2;
          break;
        } else if (stack[stack.length - 1] !== elem) {
          stack.push(elem);
          board[i][move - 1] = 0;
          break;
        }
      }
    }
  }
  return count;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
