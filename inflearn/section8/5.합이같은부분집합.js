function solution(arr) {
  const totalSum = arr.reduce((prev, acc) => prev + acc);
  let answer = 'NO';

  function dfs(depth, sum) {
    const sum2 = totalSum - sum;

    if (sum === sum2) {
      answer = 'YES';
      return;
    }
    if (depth === arr.length) return;
    else {
      dfs(depth + 1, sum + arr[depth]);
      dfs(depth + 1, sum);
    }
  }

  dfs(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
