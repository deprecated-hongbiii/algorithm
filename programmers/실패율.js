function solution(N, stages) {
  var answer = [];

  for (let i = 1; i <= N; i++) {
    // 스테이지 1부터 N까지의 실패율 구하는 반복문
    const arrive = stages.filter((s) => s >= i).length;
    if (!arrive) {
      answer.push({ stage: i, failRate: 0 });
      continue;
    }

    const notClear = stages.filter((s) => s === i).length;
    answer.push({ stage: i, failRate: notClear / arrive });
  }

  answer.sort((a, b) => {
    if (a.failRate === b.failRate) return a.stage - b.stage;
    return b.failRate - a.failRate;
  });

  return answer.map((v) => v.stage);
}
