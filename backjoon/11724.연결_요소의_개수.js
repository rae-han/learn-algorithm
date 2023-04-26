const filePath = process.platform === "linux" ? "/dev/stdin" : "./11724.txt";
let [config, ...lines] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [nodeCnt, lineCnt] = config.split(" ");

const visited = Array.from({ length: parseInt(nodeCnt, 10) + 1 }, () => false);
const graph = Array.from({ length: parseInt(nodeCnt, 10) + 1 }, () => Array(0));
let count = 0;

for (let i = 0; i < lineCnt; i++) {
  let [a, b] = lines[i].split(" ");
  graph[a].push(b);
  graph[b].push(a);
}

const dfs = (node) => {
  if (visited[node]) {
    return;
  }
  visited[next] = true;

  for (let i = 0; i < nodeCnt; i++) {
    const next = graph[node][i];
    if (!visited[next]) {
      dfs(next);
    }
  }
};

for (let i = 1; i < nodeCnt; i++) {
  if (!visited[i]) {
    dfs(i);
    count += 1;
  }
}

console.log(count);
