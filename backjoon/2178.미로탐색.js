const fs = require("fs");

// env
const readFileSyncAddress = "./dev/stdin";
// const readFileSyncAddress = "./2178.1.txt";

// 초기 값
const [configs, ...maze] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const graph = maze.map((m) => m.split("").map((value) => parseInt(value, 10)));

const dir = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

const dfs = (graph) => {
  const queue = [[0, 0]];

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();

    dir.forEach(([x, y]) => {
      const [nx, ny] = [cx + x, cy + y];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < graph[0].length &&
        ny < graph.length &&
        graph[ny][nx]
      ) {
        const futureCost = graph[cy][cx] + 1;
        const nextCost = graph[ny][nx];

        if (nextCost === 1 || futureCost < nextCost) {
          queue.push([nx, ny]);
          graph[ny][nx] = futureCost;
        }
      }
    });
  }
};

dfs(graph);

console.log(graph[graph.length - 1][graph[0].length - 1]);
