function solution(test) {
  const studentCnt = test[0].length;
  const answer = [];
  const matrix = Array.from({ length: studentCnt + 1 }, () =>
    new Array(studentCnt + 1).fill(0)
  );

  for (let i = 0; i < test.length; i++) {
    for (let j = 0; j < test.length; j++) {
      const [mento, menti] = [test[i][j], test[i][j + 1]];
      matrix[mento][menti] = 1;
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      if (matrix[i][j] === 1 && matrix[j][i] === 1) {
        matrix[i][j] = 2;
        matrix[j][i] = 2;
      }

      if (matrix[i][j] === 1 && matrix[j][i] === 0) {
        answer.push([i, j]);
      } else if (matrix[i][j] === 0 && matrix[j][i] === 1) {
        answer.push([j, i]);
      }
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
