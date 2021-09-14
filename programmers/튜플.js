function solution(s) {
  var answer = [];
  // 원소의 개수가 1, 2, ... , n개 되도록 정렬
  // 없는 원소를 push해나가면 됨

  // 1. s를 배열로 나누기
  const arr = s
    .slice(1, s.length - 1)
    .split(/,(?=\{)/g) // 뒤에 { 있는 , 에만 대응됩니다.
    .map((el) => el.slice(1, el.length - 1))
    .map((el) => el.split(','))
    .map((el) => el.sort((a, b) => +a - +b));

  // 2. 문자열 길이 오름차순으로 정렬
  arr.sort((a, b) => a.length - b.length);

  // 3. 반복 돌며 이전 배열과 비교해서 없는 원소를 answer에 push
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) answer.push(arr[0][0]);
    else {
      const temp = arr[i].filter((v) => !arr[i - 1].includes(v)); // includes는 인접한 부분집합만 체크하기 때문에 12번 줄에서 미리 정렬을 해놨음
      answer.push(temp[0]);
    }
  }

  return answer.map((el) => +el);
}

console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}')); // [2, 1, 3, 4]

// ------------------ 예전 풀이 ------------------
/**
 * 길이 오름차순으로 정렬하고 차례대로 각각의 원소를 set에 넣으면
 * 중복된 건 set이 알아서 추가를 안 할 것이고 새로 들어온 건 추가가 됨
 * Set은 순서도 보장하므로 forEach로 차례대로 answer.push 했음
 */

function solution2(s) {
  const test = s.replace(/^\{/, '').replace(/\}$/, ''); // 맨 앞 {, 맨 뒤 } 제거
  // x(?=y) 오직 y가 뒤따라오는 x에만 대응됨
  const splited = test.split(/\,(?=\{)/); // } 가 뒤따라오는 , 를 기준으로 스플릿
  const splited2 = splited.map((str) =>
    str.replace(/^\{/, '').replace(/\}$/, '')
  );
  const splited3 = splited2.map((e) => e.split(','));
  const splited4 = splited3.map((arr) => arr.map((e) => Number(e)));

  const sortByLength = (array) => {
    return array.sort((x, y) => x.length - y.length);
  };

  const finalData = sortByLength(splited4);
  const set = new Set();

  finalData.forEach((arr) => arr.forEach((e) => set.add(e)));
  let answer = [];
  set.forEach((e) => answer.push(e));
  return answer;
}

console.log(solution2('{{1,2,3},{2,1},{1,2,4,3},{2}}')); // [2, 1, 3, 4]
