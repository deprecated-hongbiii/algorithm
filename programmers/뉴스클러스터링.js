function solution(str1, str2) {
  var answer = 0;
  // 각각의 문자열로 다중집합을 만든다.
  const set1 = getSet(str1);
  const set2 = getSet(str2);

  if (!set1.length && !set2.length) return 65536;

  // 각각의 다중집합에서 원소 개수를 카운팅
  // 1에도 있고 2에도 있는 원소이면 min값, max값 적절히 선택
  const set1el = {};
  const set2el = {};

  set1.forEach((el) => {
    if (!set1el.hasOwnProperty(el)) set1el[el] = 1;
    else set1el[el] += 1;
  });
  set2.forEach((el) => {
    if (!set2el.hasOwnProperty(el)) set2el[el] = 1;
    else set2el[el] += 1;
  });

  // 교집합 개수 구하기
  // 두 객체가 같은 키를 가지고 있으면 교집합이 있는 것!
  let same = 0;
  for (const property in set1el) {
    const [key, count] = [property, set1el[property]];
    if (set2el.hasOwnProperty(key)) {
      same += Math.min(count, set2el[key]);
    }
  }

  // 합집합 개수 구하기
  // 모든 원소의 개수를 구하는데,
  // 두 객체가 같은 키를 가지고 있는 경우에는 큰값으로 카운트!
  let all = 0;
  for (const property in set1el) {
    const [key, count] = [property, set1el[property]];
    if (set2el.hasOwnProperty(key)) {
      all += Math.max(count, set2el[key]);
    } else {
      all += count;
    }
  }
  for (const property in set2el) {
    // 이미 같은 키는 센 상황
    const [key, count] = [property, set2el[property]];
    if (!set1el.hasOwnProperty(key)) all += count;
  }

  return Math.floor((same / all) * 65536);
}

function getSet(str) {
  const arr = [];
  for (let i = 0; i < str.length - 1; i++) {
    arr.push(str[i] + str[i + 1]);
  }
  return arr
    .map((el) => el.toLowerCase())
    .filter((el) => /[a-z][a-z]/.test(el));
}
