const cities = 3;
const pipeCount = 2;
const start = 1;

const pipes = [
  [1, 2, 4],
  [1, 3, 2],
];

const graph = Array.from({ length: cities + 1 }, () => []);
console.log(1, graph);

pipes.forEach(([start, end, distance]) => {
  graph[start] = [...graph[start], [end, distance]];
});
console.log(2, graph);

const visited = Array.from({ length: cities + 1 }, (_, idx) => idx === 0);
const cost = Array.from({ length: cities + 1 }, () => Infinity);
console.log(3, visited, cost);

const getSmallestDistance = () => {
  let index = 0;
  let min = Infinity;

  cost.forEach((_, i) => {
    if (!visited[i] && cost[i] < min) {
      index = i;
      min = cost[i];
    }
  });

  return index;
};

const dijkstra = (start) => {
  cost[start] = 0;
  visited[start] = true;

  console.log(4, cost, visited);

  graph[start].forEach(([end, distance]) => {
    cost[end] = Math.min(cost[end], distance);
  });

  for (let i = 0; i < cities; i++) {
    const now = getSmallestDistance();
    visited[now] = true;

    graph[now].forEach(([end, distance]) => {
      cost[end] = Math.min(cost[end], cost[now] + distance);
    });
  }
};

dijkstra(1);

console.log(5, visited, cost);
