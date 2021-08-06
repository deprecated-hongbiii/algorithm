/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  // k개 연속이면 터뜨리기
  let stack = [];
  const countStack = [];

  for (let el of s) {
    if (el === stack[stack.length - 1]) {
      countStack[countStack.length - 1]++;
      if (countStack[countStack.length - 1] < k) stack.push(el);
      else {
        countStack.pop();
        for (let i = 1; i < k; i++) {
          stack.pop();
        }
      }
    } else {
      stack.push(el);
      countStack.push(1);
    }
  }

  return stack.join('');
};

console.log(removeDuplicates('abcd', 2));
console.log(removeDuplicates('deeedbbcccbdaa', 3));
