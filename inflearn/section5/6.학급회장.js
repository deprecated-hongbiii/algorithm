function solution(s) {
  const table = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  };

  for (let i = 0; i < str.length; i++) {
    table[str[i]] += 1;
  }

  const sorted = Object.entries(table).sort(([, a], [, b]) => b - a);
  return sorted[0][0];
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
