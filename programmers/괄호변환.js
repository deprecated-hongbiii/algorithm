function solution(p) {
  var answer = '';

  if (p === '') return '';
  const [u, v] = splitTwoBalancedStr(p);

  if (isCorrectStr(u)) {
    return u + solution(v);
  } else if (!isCorrectStr(u)) {
    const uu = u
      .slice(1, -1)
      .split('')
      .map((token) => (token === '(' ? ')' : '('))
      .join('');
    return '(' + solution(v) + ')' + uu;
  }

  return answer;
}

function splitTwoBalancedStr(s) {
  let [openCnt, closeCnt, idx] = [0, 0, 0];
  while (!openCnt || !closeCnt || openCnt !== closeCnt) {
    if (s[idx] === '(') openCnt++;
    if (s[idx] === ')') closeCnt++;
    idx++;
  }
  return [s.slice(0, idx), s.slice(idx)];
}

function isCorrectStr(s) {
  let result = true;
  let [openCnt, closeCnt] = [0, 0];
  for (let i = 0; i < s.length; i++) {
    if (openCnt < closeCnt) {
      result = false;
      break;
    }
    if (s[i] === '(') openCnt++;
    if (s[i] === ')') closeCnt++;
  }
  return result;
}
