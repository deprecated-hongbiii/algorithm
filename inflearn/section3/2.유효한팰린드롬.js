function solution(s) {
  const removed = s.toLowerCase().replace(/[^a-z]/g, '');
  return removed === removed.split('').reverse().join('') ? 'YES' : 'NO';
}

let str = 'found7,time:study;Yduts;emit,7Dnuof';
console.log(solution(str));
