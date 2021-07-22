function solution(record) {
  var answer = [];
  const table = {};

  const tokens = record.map((txt) => txt.split(' '));

  tokens.forEach((token) => {
    if (token[0] === 'Enter' || token[0] === 'Change') {
      table[token[1]] = token[2];
    }
  });

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i][0] === 'Enter')
      answer.push(`${table[tokens[i][1]]}님이 들어왔습니다.`);
    if (tokens[i][0] === 'Leave')
      answer.push(`${table[tokens[i][1]]}님이 나갔습니다.`);
    if (tokens[i][0] === 'Change') continue;
  }

  return answer;
}
