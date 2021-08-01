function solution(s) {
  const paren = [];
  const chars = [];

  for (let t of str) {
    if (t === '(') {
      paren.push(t);
      continue;
    }
    if (t === ')') {
      paren.pop();
      continue;
    }
    if (!paren.length) chars.push(t);
  }

  return chars.join('');
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
