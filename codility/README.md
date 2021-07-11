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

<br>

## 🍿 CyclicRotation

(21.07.11)

### 걸린 시간

- 15분

### 풀이 방법

- 배열의 slice 메서드와 spread operator를 이용하여 풀이
- 문제에 오른쪽으로 회전이라고 나와있고 그렇게 이해도 잘 했는데, 정작 풀 때 왼쪽으로 회전시킴. 좀 더 정확하게 생각을 하자

### 다른 풀이

- 배열의 뒷부분 요소를 잘라내느라 `A.length - K` 이렇게 썼는데, 음수를 넣으면 뒤에서부터 K개 바로 잘라낼 수 있다.
- 풀이 방법은 거의 비슷한데 내 코드보다 좀 더 간결한 듯

```js
function solution(A, K) {
  const rotateArray = (arr, shiftCount) => [
    ...arr.slice(-shiftCount),
    ...arr.slice(0, -shiftCount),
  ];
  const shiftCount = K % A.length;

  return shiftCount ? rotateArray(A, shiftCount) : A;
}
```

- slice 메서드 정리
  - `slice(n)` : 인덱스 n부터 끝까지 자름
  - `slice(-n)` : 뒤에서부터 n개 자름
  - `slice(n, k)` : 인덱스 n부터 k - 1까지 자름
  - `slice(n, -k)` : 인덱스 n부터 뒤에서부터 센 인덱스 k까지 자름
    - `[1, 2, 3, 4, 5].slice(2, -1);` 은 `[3, 4]`
