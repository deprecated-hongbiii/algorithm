/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set(); // rooms.length와 같아야 모든 방을 방문한 것 4개
  visited.add(0);
  const stack = [0];

  while (stack.length) {
    const now = stack.pop();
    for (let room of rooms[now]) {
      if (!visited.has(room)) {
        visited.add(room);
        stack.push(room);
      }
    }
  }
  return visited.size === rooms.length;
};

var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const v = dfs(0, visited, rooms);
  return v.size === rooms.length;
};

function dfs(num, visited, rooms) {
  if (visited.has(num)) return;
  visited.add(num);

  for (let room of rooms[num]) {
    dfs(room, visited, rooms);
  }

  return visited;
}
