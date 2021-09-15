// 21-09-15

function solution(files) {
  // 영문 대소문자, 숫자, 공백, 마침표, 빼기부호만 가능
  // head: 숫자 뺀 나머지 놈들. 최소 한 글자 이상
  // number: 1~5글자의 숫자
  // tail: 나머지 부분

  const table = files.map((file) => {
    const matched = file.match(/([A-Za-z .-]{1,})(\d{1,5})([A-Za-z .-\d]*)/);
    const [original, head, number, tail] = [
      matched[0],
      matched[1],
      matched[2],
      matched[3],
    ];
    return { original, head, number, tail };
  });

  table.sort((a, b) => {
    const [upperA, upperB] = [a.head.toUpperCase(), b.head.toUpperCase()];
    const [numA, numB] = [+a.number, +b.number];

    // head, number도 모두 같으면 원래 입력에 주어진 순서를 유지
    if (upperA === upperB && numA === numB) return 0;

    // head가 대소문자 구분 없이 같다면, number 숫자 순으로 정렬
    if (upperA === upperB) return numA - numB;

    // head 부분 사전 순 정렬 (대소문자 구분 x)
    if (upperA > upperB) return 1;
    if (upperA < upperB) return -1;
  });

  return table.map((file) => file.original);
}

// 21-09-04

function solution2(files) {
  const separated = files.map((file) => {
    const matched = file.match(
      /([a-zA-Z\ \.\-]+)(\d{1,5})([a-zA-Z\ \.\-0-9]*)/
    );
    const [head, number, tail] = [matched[1], matched[2], matched[3]];
    return { head, number, tail };
  });

  separated.sort((a, b) => {
    // 사전순 정렬
    const upperA = a.head.toUpperCase();
    const upperB = b.head.toUpperCase();

    if (upperA > upperB) return 1;
    if (upperA < upperB) return -1;
    if (upperA === upperB) {
      // 같으면 숫자 오름차순
      return a.number - b.number;
    }
  });

  return separated.map((el) => el.head + el.number + el.tail);
}
