function solution(progresses, speeds) {
  var answer = [];
  let finished = [];

  const restDays = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
  let max = restDays[0];
  finished.push(restDays[0]);

  for (let i = 1; i < restDays.length; i++) {
    if (restDays[i] > max) {
      max = restDays[i];
      answer.push(finished.length);
      finished = [];
    }
    finished.push(restDays[i]);
  }
  answer.push(finished.length);

  return answer;
}
