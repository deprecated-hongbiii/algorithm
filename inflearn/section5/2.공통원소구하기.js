function solution(arr1, arr2) {
  let p1 = (p2 = 0);
  const sorted1 = arr1.sort((a, b) => a - b);
  const sorted2 = arr2.sort((a, b) => a - b);
  const answer = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (sorted1[p1] === sorted2[p2]) {
      answer.push(sorted1[p1]);
      p1++;
      p2++;
    }
    if (sorted1[p1] > sorted2[p2]) p2++;
    if (sorted1[p1] < sorted2[p2]) p1++;
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
