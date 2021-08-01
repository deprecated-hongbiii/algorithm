function solution(s) {
  const stack = [];
  for (let token of s) {
    if (token === '(') stack.push(token);
    if (token === ')') {
      if (!stack.length) return 'NO';
      else stack.pop();
    }
  }

  return stack.length ? 'NO' : 'YES';
}

let a = '(()(()))(()';
console.log(solution(a));
