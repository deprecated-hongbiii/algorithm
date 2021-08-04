function solution(s) {
  const stack = [];
  const operator = ['+', '-', '*', '/'];
  const calculate = (a, b, operator) => {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
    }
  };

  // stack에 하나씩 넣다가 연산자가 나오면 stack에서 2개 꺼내서 연산 후 다시 stack에 넣는다.
  for (let el of s) {
    if (!operator.includes(el)) stack.push(+el);
    else {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(calculate(a, b, el));
    }
  }
  return stack[0];
}

console.log(solution('352+*9-')); // 12
console.log(solution('472+*')); // 36
console.log(isNaN('+'));
