function solution(a, b, c) {
  const arr = [a, b, c].sort((i, j) => j - i);
  console.log(arr);
  if (arr[0] > arr[1] + arr[2]) return 'NO';
  else return 'YES';
}

console.log(solution(13, 33, 17));
