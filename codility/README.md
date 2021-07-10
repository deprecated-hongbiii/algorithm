## 🍿 BinaryGap

(21.07.10)

### 걸린 시간

- 25분

### 풀이 방법

- 2진수 문자열로 바꾼 뒤 모두 쪼갠다.
- map으로 1의 인덱스들을 모은 배열을 만든다.
- 그 배열을 for문으로 돌면서 차이(=== 0의 개수)를 구한다.

### 다른 풀이

- 문자열의 메서드를 적극 활용하여 풀이
- 처음 1과 마지막 1의 인덱스로 slice해서 1을 기준으로 split, 그리고 길이 구하기

```js
function solution(N) {
  const binaryNum = N.toString(2);
  const binaryGaps = binaryNum.slice(
    binaryNum.indexOf('1') + 1,
    binaryNum.lastIndexOf('1')
  );
  const zeroCounted = binaryGaps.split('1').map((zeros) => zeros.length);
  return zeroCounted.length ? Math.max(...zeroCounted) : 0;
}
```
