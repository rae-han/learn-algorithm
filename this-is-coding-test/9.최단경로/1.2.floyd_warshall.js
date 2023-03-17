const node_count = 4;

const data = [
  [1, 2, 4],
  [1, 4, 6],
  [2, 1, 3],
  [2, 3, 7],
  [3, 1, 5],
  [3, 4, 4],
  [4, 3, 2],
];

// const graph = Array.from({ length: node_count }, (_, index) =>
//   Array.from({ length: node_count }, (_, idx) => (index === idx ? 0 : Infinity))
// );

const graph = Array.from({ length: node_count + 1 }, () =>
  Array.from({ length: node_count + 1 }, () => Infinity)
);
graph.forEach((_, i) => {
  graph[i][i] = 0;
  graph[0][i] = 0;
  graph[i][0] = 0;
});

console.log(1, graph);

data.forEach(([start, end, distance]) => {
  console.log(start, end);
  graph[start][end] = distance;
});

console.log(2, graph);

for (let n = 1; n <= node_count; n++) {
  for (let i = 1; i <= node_count; i++) {
    for (let j = 1; j <= node_count; j++) {
      graph[i][j] = Math.min(graph[i][j], graph[i][n] + graph[n][j]);
    }
  }
}

console.log(3, graph);
