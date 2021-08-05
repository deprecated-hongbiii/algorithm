/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  // k개 연속이면 터뜨리기
  let stack = [];

  for (let el of s) {
    // 새로운 el을 볼 때 직전 k-1개의 원소와 el이 같은지 확인
    // 모두 같다면 stack에서 뒤에서 k-1개 pop (또는 slice(0, k))
    // 하나라도 다르다면 그 다음 el로~
    let flag = true;
    for (let i = 1; i < k; i++) {
      if (el === stack[stack.length - i]) continue;
      else {
        flag = false;
        stack.push(el);
        break;
      }
    }
    if (flag) stack = stack.slice(0, -(k - 1));
  }

  return stack.join('');
};

console.log(removeDuplicates('abcd', 2));
console.log(removeDuplicates('deeedbbcccbdaa', 3));
