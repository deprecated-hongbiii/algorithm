function solution(numbers) {
  var answer = 0;

  // 1. 모든 순열을 구한다.
  const splited = numbers.split('');
  const total = [];

  for (let i = 1; i <= numbers.length; i++) {
    total.push(...getPermutations(splited, i).map((v) => Number(v.join(''))));
  }

  const removedDuplicated = Array.from(new Set(total));

  console.log(removedDuplicated);

  // 2. 각각의 숫자가 소수인지 판별한다.
  return removedDuplicated.filter((num) => isPrime(num)).length;
}

function getPermutations(arr, selectNumber) {
  const result = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    result.push(...attached);
  });

  return result;
}

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
