function solution(absolutes, signs) {
  const realInts = absolutes.map((abs, i) => (signs[i] ? abs : -abs));
  return realInts.reduce((prev, curr) => prev + curr);
}
