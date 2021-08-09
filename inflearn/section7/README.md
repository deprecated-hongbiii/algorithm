## 1. 선택정렬

(21.08.09)

- 선택정렬은 `O(N²)` 알고리즘
- 배열을 for문으로 돌면서, i번째 요소와 i + 1번째 요소부터 끝까지 중에 최솟값을 찾아 비교하여, 두 요소의 자리를 바꿔준다.
- 단순히 최솟값과 인덱스를 찾기 위해 `Math.min`의 인자로 스프레드 연산자를 사용하여 배열을 넣고, `indexOf`로 인덱스를 찾았다.
- 이 부분만 봤을 때 시간복잡도가 정확히 뭔지는 잘 모르겠지만 하여튼 안 좋다는 건 알겠다.
- 아마 내가 최솟값의 인덱스를 찾은 방법은 `O(N²)` 이지 않을까 싶다. `Math.min(...arr)` 이런 형태가 우선 배열을 얕은 복사하기 때문에 `O(N)` 이 고, 그 배열에서 최솟값을 찾기 때문에 또 `O(N)` 이라서 `O(N²)` 으로 예상
- 그렇다면.. 이게 for문 안에 들어있기 때문에 결국 `O(N³)`...?!!

### 선생님 풀이

- 최솟값의 인덱스를 찾는 과정을 `O(N)` 으로 했다. (idx 라는 변수를 선언해줘야 함)

```js
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
```
