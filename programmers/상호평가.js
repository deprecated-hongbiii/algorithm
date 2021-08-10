function solution(scores) {
  var answer = '';
  const studentCount = scores.length;
  const transposed = transpose(scores); // 행,열 바꾸기

  const getGrade = (score) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 50) return 'D';
    return 'F';
  };
  // 한 학생이 받은 점수는 이제 행에 담긴 점수들을 보면 된다.

  // 반복문 돌면서 볼 건데, 학생 한 명 당 자기자신을 평가한 점수가 유일한 최고점 또는 유일한 최저점인지 판단해야 함
  // 1. 최고점 또는 최저점인가? 2. 유일한가? - 이렇게 두 가지 체크
  // 만약 그렇다면, 그 점수는 빼고 평균 계산 (studentCount - 1 만큼 나누기)
  // 그렇지 않다면, 모든 점수를 포함하여 평균 계산
  // 평균 낸 점수를 점수 구간에 따라 학점으로 바꾸기

  answer = transposed.reduce((acc, scoreArr, i) => {
    const myScore = scoreArr[i];
    const max = Math.max(...scoreArr);
    const min = Math.min(...scoreArr);
    let isOnlyScore = true;
    for (let j = 0; j < studentCount; j++) {
      if (i === j) continue;
      if (myScore === scoreArr[j]) {
        isOnlyScore = false;
        break;
      }
    }

    const sum = scoreArr.reduce((prev, curr) => prev + curr);

    if ((myScore === max || myScore === min) && isOnlyScore) {
      const average = (sum - myScore) / (studentCount - 1);
      return acc + getGrade(average);
    } else {
      const average = sum / studentCount;
      return acc + getGrade(average);
    }
  }, '');

  return answer;
}

function transpose(original) {
  const rowOfOrigin = original.length;
  const colOfOrigin = original[0].length;
  const transposed = Array.from({ length: colOfOrigin }, () =>
    new Array(rowOfOrigin).fill(0)
  );
  for (let i = 0; i < rowOfOrigin; i++) {
    for (let j = 0; j < colOfOrigin; j++) {
      [transposed[j][i]] = [original[i][j]];
    }
  }
  return transposed;
}
