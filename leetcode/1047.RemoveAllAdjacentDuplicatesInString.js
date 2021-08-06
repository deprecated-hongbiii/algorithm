/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];
  for (let el of s) {
    if (el === stack[stack.length - 1]) stack.pop();
    else stack.push(el);
  }
  return stack.join('');
};
