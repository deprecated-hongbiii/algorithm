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
