function solution(str1, str2) {
  const sorted1 = str1.split('').sort();
  const sorted2 = str2.split('').sort();

  for (let i = 0; i < str1.length; i++) {
    if (sorted1[i] !== sorted2[i]) return 'NO';
  }
  return 'YES';
}

console.log(solution('AbaAeCe', 'baeeACA'));
console.log(solution('abaCC', 'Caaab'));
