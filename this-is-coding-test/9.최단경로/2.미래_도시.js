const node_count = 5;
const data = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 4],
  [3, 5],
  [4, 5],
];
const targets = [5, 4];

const graph = Array.from({ length: node_count + 1 }, () =>
  Array.from({ length: node_count + 1 }, () => Infinity)
);

graph.forEach((_, i) => {
  graph[i][i] = 0;
  graph[i][0] = 0;
  graph[0][i] = 0;
});

console.log(1, graph);

data.forEach(([start, end]) => {
  graph[start][end] = 1;
  graph[end][start] = 1;
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

console.log(graph[1][5] + graph[5][4]);
