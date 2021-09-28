function solution(m, ps, pt) {
  let scoreSum = 0;

  function dfs(depth, time, score) {
    if (depth > ps.length) return;
    if (time > m) return;

    scoreSum = Math.max(scoreSum, score);

    dfs(depth + 1, time + pt[depth], score + ps[depth]);
    dfs(depth + 1, time, score);
  }

  dfs(0, 0, 0);

  return scoreSum;
}

let scores = [10, 25, 15, 6, 7];
let times = [5, 12, 8, 3, 4];
console.log(solution(20, scores, times));
