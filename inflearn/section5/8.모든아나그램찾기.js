function solution(s, t) {
  let count = 0;
  let l = 0;

  // 1. 부분 문자열을 구하는데, t.length와 같은 길이를 가진 문자열을 구한다.
  for (let r = t.length; r <= s.length; r++) {
    const temp = s.substring(l++, r);
    // 2. 그 문자열이 아나그램인지 확인한다.
    if (isAnagram(temp, t)) count++;
    else continue;
  }
  return count;
}

function isAnagram(str1, str2) {
  // 정렬 사용하지 않고 해보기
  const map = new Map();
  for (let char of str1) {
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }
  for (let char of str2) {
    if (!map.has(char)) return false;
    if (map.has(char) && !map.get(char)) map.set(char, map.get(char) - 1);
    if (map.get(char) === 0) return false;
  }
  return true;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
