function solution(info, query) {
  var answer = [];

  const querySplit = query
    .map((v) => v.replace(/and/g, ''))
    .map((v) => v.split(/ +/));

  querySplit.forEach((q) => {
    const [skill, part, career, food, score] = q;
    answer.push(
      info
        .filter((i) => {
          const splited = i.split(' ');
          return +splited[splited.length - 1] >= score;
        })
        .filter((i) => {
          const splited = i.split(' ');
          if (skill === '-') return true;
          return splited[0] === skill;
        })
        .filter((i) => {
          const splited = i.split(' ');
          if (part === '-') return true;
          return splited[1] === part;
        })
        .filter((i) => {
          const splited = i.split(' ');
          if (career === '-') return true;
          return splited[2] === career;
        })
        .filter((i) => {
          const splited = i.split(' ');
          if (food === '-') return true;
          return splited[3] === food;
        })
    );
  });
  return answer.map((v) => v.length);
}
