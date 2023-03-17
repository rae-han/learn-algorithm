const start = 1,
  end = 6;
const data = [
  [1, 2, 2],
  [1, 3, 5],
  [1, 4, 1],
  [2, 3, 3],
  [2, 4, 2],
  [3, 2, 3],
  [3, 6, 5],
  [4, 3, 3],
  [4, 5, 1],
  [5, 3, 1],
  [5, 6, 2],
];

// const graph = Array.from({ length: end + 1 }, () => []);
// console.log(graph);
const visited = Array.from({ length: end + 1 }, (_, idx) => idx === 0);
console.log(visited);
const cost = Array.from({ length: end + 1 }, (_, idx) => Infinity);
console.log(cost);
const graph = data.reduce(
  (acc, [start, end, distance]) => {
    acc[start] = [...acc[start], [end, distance]];
    return acc;
  },
  Array.from({ length: end + 1 }, () => [])
);
console.log(graph);

const getSmallestNode = () => {
  let [index, value] = [0, Infinity];

  cost.forEach((_, idx) => {
    console.log(idx, visited[idx], cost[idx]);
    if (!visited[idx] && cost[idx] < value) {
      console.log("in", index, value);
      index = idx;
      value = cost[idx];
    }
  });

  return index;
};

const dijkstra = (start) => {
  cost[start] = 0;
  visited[start] = true;

  graph[start].forEach(([end, distance]) => {
    cost[end] = distance;
  });

  for (let i = end; i > 0; i--) {
    const now = getSmallestNode();
    console.log(123, now);
    visited[now] = true;

    graph[now].forEach(([end, distance]) => {
      // if (cost[end] > cost[now] + distance) {
      //   cost[end] = cost[now] + distance;
      // }
      cost[end] = Math.min(cost[end], cost[now] + distance);
    });
  }
};

dijkstra(1);

console.log(cost);
