function solution(files) {
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
