function solution(A) {
  // 어떤 value들이 있는지 알기 위해 Set에 넣고
  // 반복문을 위해 다시 배열로 바꿈
  const set = Array.from(new Set(A));

  for (let elem of set) {
    const pair = A.filter((v) => v === elem).length;
    if (pair % 2 === 1) return elem;
  }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
