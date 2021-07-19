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

## 🍿 FrogRiverOne

(21.07.14)

### 걸린 시간

- 30분 [🔗 결과](https://app.codility.com/demo/results/trainingZ2DJ4M-VFE/)
- 그 뒤로도 한 30분동안 두 번 품 [🔗 결과](https://app.codility.com/demo/results/trainingCGZANW-XY4/)

### 풀이 방법

- 처음 풀이 때는 `O(N²)` 인 걸 알면서도 다른 방법이 생각나지 않아서 그냥 풂
- 시간 초과보다 그냥 풀이가 틀렸음 (18점)
  - for문의 범위가 틀린 것이었다. A 배열을 돌아야 하는데 왜 1 ~ X+1을 쓰고 난리.. 범위 설정할 때 헷갈리는 경우가 많다.. 🤕
- for문 범위를 0 ~ A.length로 고침
  - 정답은 맞았으나 시간초과. 역시 뭔가 곧이곧대로 풀면 바로 `O(N²)` 이다.
- Set을 쓰면 된다는 힌트를 얻어 풀이
  - `O(N)` 으로 해결

### 다른 풀이

- Set을 사용해서 푸는 게 제일 좋은 방법인 듯

<br>

## 🍿 MaxCounters

### 결과

| Try |   Date   | Time spent | Correctness | Performance |                                 Code                                 |
| :-: | :------: | :--------: | :---------: | :---------: | :------------------------------------------------------------------: |
|  1  | 21-07-17 |    19분    |    100%     |     60%     | [🔗 결과](https://app.codility.com/demo/results/training9GMFM8-AVG/) |
|  2  | 21-07-17 |     -      |    100%     |     60%     | [🔗 결과](https://app.codility.com/demo/results/trainingC4CGKG-9XD/) |

### 풀이 방법

#### 1st try

- 문제 이해하는 데에 좀 오래 걸림
- 문제에 나온 곧이곧대로 푼 듯
- Max count를 찾아서 세팅하는 과정에서 Math.max를 사용하는 바람에 `O(N²)` 이 됐나?

#### 2nd try

- max 값 구하는 부분만 살짝 바꿨는데 아무래도 `new Array(N).fill` 부분도 시간 복잡도를 증가시키는 원인인 것 같다. 어떻게 풀어야 할 지 모르겠어!!!

### 돌아보기

- 다른 사람이 푼 걸 봐도, 설명을 들어도 풀이 방법이 잘 이해가 안 됐던 문제. 내가 쓴 코드가 시간복잡도가 크다는 건 알겠지만 어떻게 다르게 풀어야 할 지 전혀 감이 안 왔다. 새로운 방법들을 하나씩 익혀야겠다..

### 다른 풀이

<details>
  <summary>Code</summary>
  <div markdown="1">

```js
function solution(N, A) {
  const counter = new Array(N).fill(0);
  let maxCounter = 0;
  let tmpMaxCounter = 0;

  A.forEach((item) => {
    let idx = item - 1;
    if (item <= N) {
      counter[idx] = Math.max(counter[idx], maxCounter);
      counter[idx] += 1;
      tmpMaxCounter = Math.max(counter[idx], tmpMaxCounter);
    } else {
      maxCounter = tmpMaxCounter;
    }
  });

  counter.forEach((item, idx, arr) => {
    arr[idx] = Math.max(item, maxCounter);
  });

  return counter;
}
```

  </div>
  </details>
  
- Max count를 memorize해두고 마지막에 한 번만 적용해야 한다고 한다.
- 이 경우 중간에 max count로 변경되면 결과값이 달라지기 때문에 max count와 memorized count를 분리해야 함 👉 이 부분이 잘 이해가 안 됐음
- 홍선생한테 풀이 방법 물어봤다.
  - 현재 제일 큰 값과 N+1이 들어왔을 때 업데이트 해야할 값을 따로 저장
  - 업데이트 해야할 값보다 작으면 업데이트 해야할 값 + 1 이 되는 것..
  - 이렇게 쭉 하다가 마지막에 모든 배열을 한번씩 보면서 업데이트 쳐줘야 할 값보다 작은 게 있으면 그걸 업뎃값으로 변경해주면 끝

<br>

## 🍿 MissingInteger

### 결과

| Try |   Date   | Time spent | Correctness | Performance |                                 Code                                 |
| :-: | :------: | :--------: | :---------: | :---------: | :------------------------------------------------------------------: |
|  1  | 21-07-18 |    13분    |     20%     |    100%     | [🔗 결과](https://app.codility.com/demo/results/trainingKDA98W-FPN/) |
|  2  | 21-07-18 |     -      |     80%     |    100%     | [🔗 결과](https://app.codility.com/demo/results/training34NAUT-TWW/) |
|  3  | 21-07-19 |     -      |    100%     |    100%     | [🔗 결과](https://app.codility.com/demo/results/trainingAAZVRV-CNA/) |

### 풀이 방법

- 어려운 문제는 아닌데 다양한 상황을 다 고려해야 하는 점이 포인트인 듯..
- 그 상황들을 내가 생각해낸 게 아니라 결과 페이지의 테스트케이스들을 보고 조건을 하나씩 추가함

### 다른 풀이

- 다양한 상황을 다 아우르는 풀이 👀
- min 값을 1로 시작해서, 배열 안에 같은 값이 있으면 1씩 올려주는 방법

<details>
  <summary>Code</summary>
  <div markdown="1">

```js
function solution(A) {
  A.sort((a, b) => a - b);

  let min = 1;

  for (let i in A) {
    if (A[i] === min) {
      min++;
    }
  }
  return min;
}
```

  </div>
</details>

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
function solution(A) {****
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

## 🍿 PermCheck

(21.07.16)

### 걸린 시간

- 5분 [🔗 결과](https://app.codility.com/demo/results/trainingYCJVSP-NKW/)

### 풀이 방법

- 1~N 범위라고 되어 있어서 정렬을 한 뒤 인덱스와 비교해보면 될 것이라 판단했다.
- 5분정도만에 급하게 푸느라 `sort` 에 콜백함수 전달을 안 해서 오답..
- 아무리 급해도 기본적인 인수는 절대 빼먹지 말자. 🤨

### 다른 풀이

- `A[0] !== 1` 인 경우에 early return 하기!!
- 차이를 계산하는 방법도 있다. - `A[i + 1] - A[i]` 이 `1` 인지 체크

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

<br>

## 🍿 TapeEquilibrium

(21.07.13) 처음 풀이 `O(N²)` 시간초과, 다시 풀이 `O(N)`
[2nd trial](https://app.codility.com/demo/results/trainingNZCHPW-25R/)

### 걸린 시간

25분, 5분

### 풀이 방법

- 처음 풀 때는 문제에 나온 곧이곧대로 for문 속에 slice 각각 해서 또 각각 합 구해서 차이를 구함
- `O(N²)` 인 걸 알면서도 그냥 그렇게 풀었다. 역시나 시간초과
- 약간 다르게 생각해서 맨 처음 자른 두 덩이에 for문 한번만 돌면서 다음 원소를 더해주고 빼주니까 `O(N)` 에 해결 가능했다.
- 문제를 효율적으로 풀려면 문제에 나온 그대로 푸는 게 아니라 조금 다르게 생각해야 한다는 걸 느꼈다.
- for문 돌 때나 slice 등등 어떤 조건이나 범위를 정할 때 조금 더 생각해보고 하자.. 생각없이 1씩 바꿔보지 말고 !!!
- 여담이지만 코딜리티 결과 페이지 링크 걸 수 있는 거 처음 알았네..

### 다른 풀이

- `O(N)` 으로 푼 다양한 풀이가 있는데 내 풀이보다 더 간결하고 명확한 풀이는 없는 듯...
- `reduce` 콜백함수의 인자에 index를 넣을 수 있다는 것, `reduceRight` 라는 메서드도 있다는 것
