function solution(m, product) {
  const n = product.length; // 학생 수 n. m은 예산

  const sorted = product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  const discountedSum = sorted.map((price) => price[0] / 2 + price[1]);
  const sortedSum = sorted.map((price) => price[0] + price[1]);

  const studentCnt = [];

  for (let i = 0; i < n; i++) {
    const sum = m - discountedSum[i]; // 할인받은 상품 빼고 난 예산
    let temp = 0;
    let count = 1;
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      temp += sortedSum[j];
      if (sum < temp) break;
      count += 1;
    }
    studentCnt.push(count);
    count = 1;
  }

  return Math.max(...studentCnt);
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

const arr2 = [
  [8, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [6, 4],
];

let arr3 = [
  [8, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [12, 1],
];

console.log(solution(28, arr)); // 답 4
console.log(solution(27, arr2)); // 답 4
console.log(solution(41, arr3)); // 답 5
