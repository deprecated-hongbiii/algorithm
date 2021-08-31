function solution(dartResult) {
  const arr = [];

  for (let i = 0; i < dartResult.length; i++) {
    const curr = dartResult[i];

    if (!isNaN(+curr)) {
      // 숫자인 경우
      if (!isNaN(dartResult[i - 1])) arr[arr.length - 1] += curr;
      // 10인 경우
      else arr.push(curr);
    }

    if (curr === 'S') arr[arr.length - 1] = Number(arr[arr.length - 1]);
    if (curr === 'D') arr[arr.length - 1] = Number(arr[arr.length - 1]) ** 2;
    if (curr === 'T') arr[arr.length - 1] = Number(arr[arr.length - 1]) ** 3;

    if (curr === '*') {
      arr[arr.length - 1] *= 2;
      if (arr[arr.length - 2]) arr[arr.length - 2] *= 2;
    }
    if (curr === '#') {
      arr[arr.length - 1] = -arr[arr.length - 1];
    }
  }

  return arr.reduce((prev, acc) => prev + acc);
}
