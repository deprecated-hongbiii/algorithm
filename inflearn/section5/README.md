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
