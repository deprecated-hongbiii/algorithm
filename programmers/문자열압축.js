function solution(s) {
  if (s.length === 1) return 1;

  const compressions = new Array(Math.floor(s.length / 2)).fill('');

  for (let i = 1; i <= s.length / 2; i++) {
    const regex = new RegExp(`[a-z]{${i}}`, 'g');
    const splited = s.match(regex);
    if (s.length % i) splited.push(s.slice(-(s.length % i)));

    let repeat = 1;
    for (let j = 1; j <= splited.length; j++) {
      if (splited[j] === splited[j - 1]) repeat++;
      else {
        if (repeat === 1) compressions[i - 1] += splited[j - 1];
        else {
          compressions[i - 1] += `${repeat}${splited[j - 1]}`;
          repeat = 1;
        }
      }
    }
  }

  const lengths = compressions.map((comp) => comp.length);
  return Math.min(...lengths);
}

console.log(solution('aabbaccc'));
console.log(solution('a'));
