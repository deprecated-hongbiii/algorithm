function solution(c, arr) {
  // c kg 이하로만 탑승 가능
  // arr : 각 바둑이의 무게가 담긴 배열
  let depth = 0;
  let weight = 0;
  const weights = [];

  function dfs(arr, weight, depth) {
    if (depth >= arr.length) {
      weights.push(weight);
      return;
    }

    dfs(arr, weight + arr[depth], depth + 1);
    dfs(arr, weight, depth + 1);
  }

  dfs(arr, weight, depth);

  const lowerThanC = weights.filter((weight) => weight <= c);
  return Math.max(...lowerThanC);
}
