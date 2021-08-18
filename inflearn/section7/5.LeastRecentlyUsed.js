function solution(size, arr) {
  let cache = [];
  arr.forEach((el) => {
    const idx = cache.indexOf(el);
    if (idx !== -1) {
      const copied = [...cache];
      copied.splice(idx, 1);
      cache = [el, ...copied];
    } else {
      if (cache.length === size) {
        cache.pop();
      }
      cache.unshift(el);
    }
  });
  return cache;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
