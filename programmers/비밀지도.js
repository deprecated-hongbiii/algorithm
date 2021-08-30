function solution(n, arr1, arr2) {
  var answer = [];

  const binArr1 = arr1.map((v) => v.toString(2)).map((v) => v.padStart(n, '0'));
  const binArr2 = arr2.map((v) => v.toString(2)).map((v) => v.padStart(n, '0'));

  for (let i = 0; i < n; i++) {
    let str = '';
    const arr1 = binArr1[i];
    const arr2 = binArr2[i];

    for (let j = 0; j < n; j++) {
      if (arr1[j] === '0' && arr2[j] === '0') str += ' ';
      else str += '#';
    }
    answer.push(str);
  }

  return answer;
}
