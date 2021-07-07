// 정규표현식 사용
function solution(str) {
  return Number(str.match(/[0-9]/g).join(''));
}
let str = 'g0en2T0s8eSoft';
console.log(solution(str));

// for문 사용
function solution2(str) {
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      answer += str[i];
    }
  }
  return Number(answer);
}
let str2 = 'g0en2T0s8eSoft';
console.log('for문 사용', solution2(str2));
