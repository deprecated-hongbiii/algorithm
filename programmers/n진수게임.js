function solution(n, t, m, p) {
  var answer = '';
  let temp = '';
  let dec = 0;

  while (temp.length < m * t) {
    temp += dec.toString(n).toUpperCase();
    dec++;
  }

  temp = temp.slice(0, m * t);

  for (let i = p - 1; i < temp.length; i += m) {
    answer += temp[i];
  }

  return answer;
}
