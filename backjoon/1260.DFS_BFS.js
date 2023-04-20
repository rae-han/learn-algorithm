const fs = require("fs");

// env
// const readFileSyncAddress = "./dev/stdin";
const readFileSyncAddress = "./1260.txt";

const [configs, ...edges] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const [nodeCount, edgeCount, rootNode] = configs.split(" ");

const graph = {};

edges.forEach((edge) => {
  const [start, end] = edge.split(" ");
  if (Object.hasOwnProperty.call(graph, start)) {
    graph[start].push(end);
  } else {
    graph[start] = [end];
  }
});

const sortedGraph = {};
Object.entries(graph).forEach(([key, value]) => {
  sortedGraph[key] = value.sort((a, b) => a - b);
});
console.log(sortedGraph);
