function solution(s) {
  const stack = [];
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(s[i]);
    else {
      if (s[i - 1] === '(') {
        total += stack.length - 1;
      } else {
        total += 1;
      }
      stack.pop();
    }
  }
  return total;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));
