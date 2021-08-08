function solution(need, plan) {
  const queue = need.split('');
  for (let lecture of plan) {
    if (lecture === queue[0]) queue.shift();
  }
  return queue.length ? 'NO' : 'YES';
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
console.log(solution('CBA', 'CBDDAB'));
