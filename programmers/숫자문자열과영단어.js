function solution(s) {
  // s를 돌면서 일단 숫자로 변환했을 때 숫자가 되는 애는 sliced에 push
  // push하면 문자열을 잘라
  // 숫자가 안 되는 애들은 모아두면서 table에 있는 단어인지 체크
  // 있으면 push하고 문자열을 잘라
  // 없으면 그냥 continue

  const table = new Map([
    ['zero', 0],
    ['one', 1],
    ['two', 2],
    ['three', 3],
    ['four', 4],
    ['five', 5],
    ['six', 6],
    ['seven', 7],
    ['eight', 8],
    ['nine', 9],
  ]);
  const sliced = [];
  let tmp = '';
  let copied = s;

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(+s[i])) {
      sliced.push(s[i]);
      copied = copied.substring(i);
      continue;
    }

    tmp += s[i];
    if (table.has(tmp)) {
      sliced.push(tmp);
      copied = copied.substring(i);
      tmp = '';
    }
  }

  const answer = sliced
    .map((elem) => (isNaN(+elem) ? table.get(elem) : +elem))
    .join('');

  return +answer;
}

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));
