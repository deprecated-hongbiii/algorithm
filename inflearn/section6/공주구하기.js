function solution(n, k) {
  const queue = new Array(n);
  for (let i = 0; i < n; i++) {
    queue[i] = i + 1;
  }

  let count = 0;
  while (queue.length !== 1) {
    count++;
    if (count === k) {
      queue.shift();
      count = 0;
    } else {
      queue.push(queue.shift());
    }
  }
  return queue[0];
}

console.log(solution(8, 3));
