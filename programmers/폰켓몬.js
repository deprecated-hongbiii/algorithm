function solution(nums) {
  const pick = nums.length / 2;
  const set = new Set(nums);
  if (set.size <= pick) return set.size;
  if (set.size > pick) return pick;
}
