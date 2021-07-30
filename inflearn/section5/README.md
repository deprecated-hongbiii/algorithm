## 1. 두 배열 합치기

(21.07.21)

- 풀기는 했지만.. 섹션 주제가 '투포인터 알고리즘, 슬라이딩 윈도우, 해시'여서 잘못 푼 느낌
- `sort`의 시간복잡도는 `O(N * logN`
- 투포인터 알고리즘으로 풀어봐야 한다. 이 문제의 경우 시간복잡도는 `O(N + M)`

### 선생님 풀이

- 각각의 배열 원소를 가리키는 포인터 변수 2개(`p1`, `p2`)를 0으로 초기화한다.
- `arr1[p1]`, `arr2[p2]` 를 비교하며 작은 것을 answer 배열에 push

```js
function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}
```

- 포인터 변수가 2개여서 이중 for문 써야 하나...? 궁금했는데 while문 안에 `++` 연산자를 이용해 코드를 쓸 수도 있다는 점이 신박했다.

<br>

## 2. 공통원소 구하기

(21.07.23)

- 두 개의 집합이 주어졌고, 각각의 배열을 인덱스를 가리키는 포인터를 증가시키면서 보면 풀 수 있겠구나. 투포인터 알고리즘이구나. 라고 생각했다.
- (참고) 이중 for문으로 일치하는 원소를 찾을 수도 있다. 하지만 시간복잡도가 `O(N²)`
- 포인터를 하나씩 증가시키면서 보기 위해서는 우선 정렬이 되어 있어야겠다고 판단함
- 어차피 마지막에 오름차순 정렬을 해야 하는데 투포인터 알고리즘을 사용하려면 정렬을 먼저 하고 시작하는 게 맞다고 판단
- 투포인터 알고리즘으로 이 문제를 풀었을 경우 시간복잡도는 `O(N + M`
- 저번에 풀었던 1번 문제에서 아이디어를 얻어 while문과 ++연산자로 풀이했다. 선생님 풀이도 나랑 같다.

<br>

## 3. 연속 부분 수열 1

(21.07.24)

- 이중 for문으로 풀 수도 있겠지만 투포인터 알고리즘 방식으로 풀어봤다.
- sum이 target보다
  - 작은 경우: sum을 증가시켜줘야 하므로 right 포인터를 한 칸 증가하고 더해줌
  - 큰 경우: sum을 감소기켜줘야 하므로 left 포인터를 한 칸 증가하고 빼줌
  - 같은 경우: right나 left를 하나만 움직이면 어느 상황이든 target과 값이 달라지게 되므로 두 포인터를 함께 한 칸 증가시킴. right포인터가 가리키는 값은 더해주고 left 포인터가 가리키는 값은 빼줌
- 전위 연산자와 후위 연산자를 써야 하는 상황이 헷갈렸는데 단계 별로 차근차근 생각해보며 코드를 짰다.
- right가 마지막 원소의 인덱스에 도달했을 경우에는 더 이상 right가 증가하면 안 되기 때문에 상황에 따라 break 하도록 했다.

### 알아둘 점

- 처음에 while문을 빠져나오기 위해 `return` 이라고만 썼는데, 함수가 종료되면서 undefined이 리턴되었다.
- '문'의 경우에는 `return` 이라고 쓰면 그 바로 바깥에 있는 함수가 종료되는 것이다.
- while문 뿐만 아니라 for문, switch문 if문 모두 마찬가지
- '문'만을 탈출하기 위해서는 `break` 를 쓰면 된다.

### 선생님 풀이

- `sum === target` 인 경우에도 left가 가리키는 값을 빼주고 left를 증가시킨다. 내가 한 것 처럼 left, right를 둘 다 증가시키는 게 아님
- right가 마지막 인덱스에서 또 증가했다는 것은, 이미 그 합이 target보다 작기 때문에 right가 증가한 것이라서 그냥 바로 끝내면 된다.
- left는 변수로 지정하고 right는 for문 조건에 지정
- for문 안에서 만약 `sum >= target` 이라면 while문 돌면서 left 값을 증가시키면서 값을 빼줌
- 이렇게 풀면 `O(N²)` 일 줄 알았으나 따져보면 `O(N)` 이다.

**내 생각**

- 문제에서 원소가 1000 이하의 '자연수' 라고 했기 때문에 `sum === target` 인 경우에는 left와 right를 둘 다 증가시켜줘도 될 것 같다.
- 원소의 값이 0일 수 있다면 `sum === target && left === right` 인 경우에는 right를 먼저 증가, `sum === target && left !== right` 일 때는 left만 증가..?

```js
function solution2(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let b = [1, 1, 3, 1, 2];
let c = [1, 1, 1, 1, 5];
console.log(solution2(5, c));
```

<br>

## 4. 연속 부분 수열 2

(21.07.27)

- 로직이 틀렸던 것이었다...
- 연속 부분 수열 1 풀었던 것처럼 생각하니, 놓치는 부분 수열들이 생겼던 것이다.
- 선생님의 로직을 보고 코드로 짜보았음
- 그런데 선생님의 코드를 보고 나니 굳이 if문으로 분기를 나눠줄 필요가 없었다.
- 그리고 while문 아래에도 혹시나 l이 r을 넘어가는 경우가 있을까봐 조건 체크를 했다. 선생님의 코드에서 이 조건을 따로 검사하지 않아도 됐던 이유는, l이 r을 넘어가는 경우가 생기는 경우에는 `r - l + 1` 의 값이 0이 되기 때문이었다. 하.. 복잡해

### 선생님 풀이

- sum이 target보다 작거나 같다면, `arr[r]` 원소를 포함하는 연속 부분 수열의 개수를 구한다. '포함하는' 인 이유는 앞에서 구한 것과 중복을 피하기 위함이다. 그 후 `r` 을 증가 (다음 for문 블럭으로 이동) 한다.
- sum이 target보다 크다면, sum <= target 이 될 때까지 `arr[l]` 을 빼고, `l` 을 증가시키고 를 반복한다. 그 후 부분 연속 수열의 개수를 구한다.

```js
function solution2(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}
```

<br>

## 5. 최대 매출

(21.07.28)

- 문제를 보자마자 이게 슬라이딩 윈도우구나! 감이 왔고 로직도 잘 짰다.
- 근데 코드로 쓸 때 삽질을........
- left 빼주는 걸 인덱스 0부터 시작해야 하는데 1부터 넣었다던가,
- max 변수를 만들어놓지 않았다던가
- 이런 사소한 (하지만 치명적인) 실수들을 했다.
- 간단하다고 그냥 냅다 풀지 말고 메모를 해서 정리를 해보는 습관을 가져야겠다.

### 선생님 풀이

```js
function solution(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
```

<br>

## 6. 학급 회장

(21.07.29)

- str을 for문으로 돌면서, 객체를 이용해서 카운트를 올려줌
- 카운트가 제일 많은 사람을 알기 위해 객체의 value 중 최댓값을 가지는 key를 알아야 했음
- 그래서 배열로 바꾸고 sort 함

### 알아둘 점

- sort 메서드는 `O(NlogN)` 이기 때문에 입력이 커졌을 때 `O(N)` 보다 더 오래 걸림
- 최댓값 구할 때는 그냥 for문 한 번 더 돌면서 max를 바꿔나가는 식으로 해야 함 (Math.max 사용할 수 있다면 쓰고!)
- 디스트럭쳐링 방식이 좀 신박했는데 어떻게 ([, a], [, b]) 이런 표현이 가능한지 궁금했다. 이건 만약 `[key, value]` 라는 배열이 있다면, 쉼표 앞의 key는 변수에 할당하지 않고 쉼표 뒤의 value 자리에 있는 것만 a 변수에 할당하겠다는 뜻
- Map을 배열로 변환하지 않아도 for...of 문에서 `[key, value]` 이렇게 디스트럭쳐링으로 뽑아낼 수 있다는 걸 알게 됐다. Map이 이터러블이어서 그런가보다.
- A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.

### 선생님 풀이

- Map을 사용
- 이 문제에서는 굳이 Map을 써야 하나 생각이 듦. 객체에는 그냥 넣으면 되는데 Map 쓰려면 has로 체크해서 없으면 set을 해줘야 하는 과정이 추가적으로 필요해서..

```js
function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}
```

<br>

## 7. 아나그램

- 별 다른 고민 없이 sort한 후 원소 하나씩 비교
- `O(NlogN)` 이니까 괜찮겠지 라는 생각을 했음. 어제 공부해놓고도!!!!
- 해쉬 방식(Map 또는 객체?)을 이용하면 O(N)으로 줄일 수 있다.

### 선생님 풀이

- Map을 사용해서 `str1` 각 원소를 카운트하고, `str2` 는 `str1` 로 생성된 Map과 비교
- Map에 없으면 당연히 아나그램이 아니고,
- Map에 있으면 개수가 동일한지 확인하기 위해 count에서 하나씩 빼줌
- 이 때 Map의 count가 0이 된 것이 있다면 개수가 맞지 않으므로 아나그램이 아님

```js
function solution(str1, str2) {
  let answer = 'YES';
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));
```
