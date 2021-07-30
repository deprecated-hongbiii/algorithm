function solution(expression) {
  const priorityCase = {
    case1: ['+', '-', '*'],
    case2: ['+', '*', '-'],
    case3: ['-', '+', '*'],
    case4: ['-', '*', '+'],
    case5: ['*', '+', '-'],
    case6: ['*', '-', '+'],
  };

  const caseResult = {};
  const splited = expression.split(/(\*|\+|\-)/);

  for (let i = 1; i <= 6; i++) {
    let copySplited = [...splited];
    const priority = priorityCase[`case${i}`];

    priority.forEach((operator) => {
      let idx = copySplited.findIndex((e) => e === operator);
      while (idx !== -1) {
        switch (operator) {
          case '+':
            copySplited.splice(
              idx - 1,
              3,
              +copySplited[idx - 1] + +copySplited[idx + 1]
            );
            idx = copySplited.findIndex((e) => e === operator);
            break;
          case '-':
            copySplited.splice(
              idx - 1,
              3,
              +copySplited[idx - 1] - +copySplited[idx + 1]
            );
            idx = copySplited.findIndex((e) => e === operator);
            break;
          case '*':
            copySplited.splice(
              idx - 1,
              3,
              +copySplited[idx - 1] * +copySplited[idx + 1]
            );
            idx = copySplited.findIndex((e) => e === operator);
            break;
        }
      }

      caseResult[`case${i}`] = Math.abs(copySplited[0]);
    });
  }

  return Math.max(...Object.values(caseResult));
}

console.log(solution('100-200*300-500+20')); // 60420
console.log(solution('50*6-3*2')); // 300
