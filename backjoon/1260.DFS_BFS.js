const fs = require("fs");

// env
const readFileSyncAddress = "./dev/stdin";
// const readFileSyncAddress = "./1260_1.txt";

// 초기 값
const [configs, ...edges] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const [nodeCount, edgeCount, rootNode] = configs.split(" ");
// 노드 갯수, 엣지 갯수, 시작 노드

// 그래프
const graph = {};
const sorted = {};
let visited = {};

// 노드 별로 하위 요소가 있다면
edges.forEach((edge) => {
  const [start, end] = edge.split(" ");
  if (!Object.hasOwnProperty.call(graph, start)) {
    graph[start] = [end];
  } else {
    graph[start] = [...graph[start], end];
  }

  if (!Object.hasOwnProperty.call(graph, end)) {
    graph[end] = [start];
  } else {
    graph[end] = [...graph[end], start];
  }
});

// 그래프를 오른차순으로 정렬
Object.entries(graph).forEach(([key, value]) => {
  sorted[key] = value.sort((a, b) => a - b);
});

// 결과 값
const result = {
  dfs: [],
  bfs: [],
};

const dfs = (node) => {
  result.dfs = [...result.dfs, node];
  visited[node] = true;

  if (sorted.hasOwnProperty(node)) {
    sorted[node].forEach((n) => {
      if (!visited[n]) {
        dfs(n);
      }
    });
  }
};

const bfs = (node) => {
  // result.bfs = [...result.bfs, node];
  // visited[node] = true;
  let queue = [node];
  visited[node] = true;

  while (queue.length !== 0) {
    const next = queue.shift();
    result.bfs = [...result.bfs, next];

    if (sorted.hasOwnProperty(next)) {
      sorted[next].forEach((n) => {
        if (!visited[n]) {
          queue = [...queue, n];
          visited[n] = true;
        }
      });
    }
  }
};

dfs(rootNode);
visited = {};
bfs(rootNode);

console.log(result.dfs.join(" "));
console.log(result.bfs.join(" "));
