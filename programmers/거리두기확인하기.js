function solution(places) {
  var answer = [];
  /**
   * 
   - 모든 응시자가 서로! 맨해튼 거리 3 이상이어야 함
   - 하지만 사이가 파티션으로 막혀있다면 맨해튼 거리 2 이하여도 괜찮음
   - 서로 거리가 몇인지 다 구해보는 수밖에 없음 (완전탐색)
   - 사람 사이의 거리는 좌표(인덱스 쌍) 찾아서 구하면 됨
      - 반복문 돌면서 P가 나오면 [i, j]를 알 수 있음
   - 맨해튼 거리가 2 이하인 두 사람 사이에 파티션이 있는지 한번 더 체크
      - 두 사람의 좌표는 3가지 경우 중 하나이다.
      - 같은 x 좌표를 가지는 경우 👉 y좌표만 변경하면서 해당 인덱스에 파티션 있는지 체크
      - 같은 y 좌표를 가지는 경우 👉 x좌표만 변경하면서 해당 인덱스에 파티션 있는지 체크
      - x, y 둘 다 다른 경우
          👉 이 경우이면서 맨해튼 거리가 2이려면 대각선으로 존재한다는 뜻이고,
          좌표의 차이는 x값끼리도 1, y값끼리도 1이다.
          그래서 반대 방향의 대각선인 두 칸만 확인해보면 된다.
   */

  const a = checkDistance(places[0]);
  const b = checkDistance(places[1]);
  const c = checkDistance(places[2]);
  const d = checkDistance(places[3]);
  const e = checkDistance(places[4]);

  return [a, b, c, d, e];
}

function checkDistance(place) {
  const matrix = place.map((row) => row.split(''));

  // P들의 좌표 구하기
  const locations = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (matrix[i][j] === 'P') locations.push([i, j]); // 정렬까지 되는 효과
    }
  }

  // P가 없으면 거리두기 지키고 있다고 보고 1 리턴
  if (!locations.length) return 1;

  // 두명씩 조합 구하기
  const couples = combination(locations, 1).filter(
    (combi) => combi.length === 2
  );

  // couples에서 맨해튼거리가 2 이하인 좌표 쌍을 거르기
  const below2 = couples.filter((couple) => {
    const [r1, c1, r2, c2] = couple.flat(1);
    return Math.abs(r1 - r2) + Math.abs(c1 - c2) <= 2 ? true : false;
  });

  // below2 반복 돌면서 사이에 파티션 있으면 넘어가고 없으면 바로 리턴 0
  // 반복문이 무사히 끝나면 마지막에 리턴 1
  for (let i = 0; i < below2.length; i++) {
    const [r1, c1, r2, c2] = below2[i].flat(1);

    // 경우 1
    if (r1 === r2 && c1 !== c2) {
      const [min, max] = [Math.min(c1, c2), Math.max(c1, c2)];
      for (let j = min + 1; j < max; j++) {
        if (matrix[r1][j] === 'X') break;
        if (j === max - 1) return 0;
      }
    }

    // 경우 2
    if (c1 === c2 && r1 !== r2) {
      const [min, max] = [Math.min(r1, r2), Math.max(r1, r2)];
      for (let j = min + 1; j < max; j++) {
        if (matrix[j][c1] === 'X') break;
        if (j === max - 1) return 0;
      }
    }

    // 경우 3
    if (r1 !== r2 && c1 !== c2) {
      // 일단 무조건 r1 < r2로 들어온다고 가정하고 풀겠음
      // 이 가정이 틀렸다면 combination 함수를 수정해야 함
      if (matrix[r1][c2] === 'X' && matrix[r2][c1] === 'X') continue;
      return 0;
    }
  }

  return 1;
}

function combination(arr, depth) {
  if (depth === arr.length) return [[], [arr[arr.length - 1]]];
  const temp = combination(arr, depth + 1); // [ [], [4] ]
  return temp.concat(temp.map((t) => [arr[depth - 1]].concat(t)));
}

console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ])
); // [1, 0, 1, 1, 1]
