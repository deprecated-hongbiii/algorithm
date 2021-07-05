function solution(s) {
  const lowerCase = s.toLowerCase();

  if (lowerCase === lowerCase.split('').reverse().join('')) return 'YES';
  return 'NO';
}

function solution2(s) {
  const lowerCase = s.toLowerCase();

  for (let i = 0; i <= s.length / 2; i++) {
    if (lowerCase[i] === lowerCase[s.length - 1 - i]) continue;
    else return 'NO';
  }
  return 'YES';
}

let str = 'gooodddooog';
console.log(solution(str));
console.log(solution2(str));
