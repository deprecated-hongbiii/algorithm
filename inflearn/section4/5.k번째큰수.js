function solution(n, k, card) {
  // 3개씩 뽑는 모든 조합을 구한다.
  const combi = getCombinations(card, 3);

  // 그 조합들 각각의 합을 구한다.
  // 정렬한다.
  const sortedSum = combi.map((c) => c[0] + c[1] + c[2]).sort((a, b) => b - a);

  // k번째 수는 인덱스로 접근해서 출력!
  return sortedSum[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

function getCombinations(arr, selectNumber) {
  const result = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    result.push(...attached);
  });

  return result;
}
