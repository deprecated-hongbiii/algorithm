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

<br>

## 🍿 OddOccurrencesInArray

(21.07.11) 실패 - 시간초과

### 걸린 시간

- 15분

### 풀이 방법

- for문 안에 filter를 사용했더니 `O(N²)`이 되어서 시간초과..😭
- 하지만 다른 방법이 떠오르지 않는다.
- 배열 이용해서 json parser 했듯이 푸시, 팝 해줘야 하나? 그럼 다음 숫자가 배열에 있는 숫자랑 다를 때 어떡하지 이 생각을 했었는데 객체를 활용하면 되는 것이었다.

### 다른 풀이

```js
function solution(A) {
  const totalCounter = A.reduce((counter, num) => {
    counter[num] = counter[num] ? counter[num] + 1 : 1;
    return counter;
  }, {});
  for (key in totalCounter) {
    if (totalCounter[key] % 2 === 1) {
      return Number(key);
    }
  }
}
```

- reduce를 이용하여 배열에 있는 숫자들의 카운트를 value로 가지는 객체 생성
- 그 객체를 for문으로 돌면서 value가 홀수인 것을 리턴
- `O(N)` 또는 `O(NlogN)` (for문에서 홀수를 일찍 만나면 for문이 일찍 종료되기 때문)
- reduce를 이렇게도 쓸 수 있구나!
- 꼭 reduce가 아니어도, A를 순회하면서 객체에 값이 없으면 새로 set하고 있으면 delete해주면 된다. 이렇게 하면 객체는 property를 딱 하나만 갖게 되는데 그걸 반환하면 된다.

<br>

## 🍿 PermMissingElem

(21.07.12)

### 풀이 방법

- 예외 케이스는 생각 못하고 for문으로 중간 값들 중 빠진 값이 있는지 체크했다.
- 제출하니 반만 맞은걸 보고... 결과 페이지에 나온 예외 케이스를 대충 if문 넣어서 처리
- 다양한 케이스를 생각해야 하는 게 귀찮아서 잘 안하려고 하게 된다. 이러면 안돼~~

### 다른 풀이

- 합 구하는 공식과 reduce를 사용해서 간결하게 풀어낸 풀이를 발견

```js
function solution(A) {
  const expectedSum = ((A.length + 1) * (A.length + 2)) / 2;
  const realSum = A.reduce((a, b) => a + b, 0);
  return expectedSum - realSum;
}
```
