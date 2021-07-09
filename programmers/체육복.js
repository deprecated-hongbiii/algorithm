function solution(n, lost, reserve) {
  var answer = 0;
  // 여벌 체육복이 있는 학생이 도난당했을 경우를 제거해야함
  // lost에 있는 학생이 reserve에도 있는 경우 filter해주기
  for (let student of lost) {
    if (reserve.includes(student)) {
      lost = lost.filter((v) => v !== student);
      reserve = reserve.filter((v) => v !== student);
    }
  }

  // 기본적으로 lost에 없는 학생은 체육 수업을 들을 수 있음
  answer = n - lost.length;
  for (let student of lost) {
    const [prev, next] = [student - 1, student + 1];
    if (reserve.includes(prev)) {
      lost = lost.filter((v) => v !== student);
      reserve = reserve.filter((v) => v !== prev);
      answer += 1;
      continue;
    }
    if (reserve.includes(next)) {
      lost = lost.filter((v) => v !== student);
      reserve = reserve.filter((v) => v !== next);
      answer += 1;
      continue;
    }
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
