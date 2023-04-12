const fs = require("fs");
// env
const readFileSyncAddress = "./dev/stdin";
// const readFileSyncAddress = "./13023.txt";

const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const [personCnt, relationCnt] = input[0]
    .split(" ")
    .map((v) => parseInt(v, 10));

  const adjArr = Array.from({ length: personCnt }, () => Array(0));
  const visited = Array.from({ length: personCnt }, () => 0);
  let flag = 0;

  for (let i = 1; i <= relationCnt; i++) {
    let [a, b] = input[i].split(" ");
    adjArr[a].push(b);
    adjArr[b].push(a);
  }

  const dfs = (pIndex, dep) => {
    if (flag === 1) {
      return;
    }

    visited[pIndex] = 1;
    dep += 1;

    if (dep === 5) {
      flag = 1;
    }

    for (let i = 0; i < adjArr[pIndex].length; i++) {
      const next = adjArr[pIndex][i];

      if (visited[next] !== 1) {
        dfs(next, dep);
      }
    }

    visited[pIndex] = 0;
  };

  for (let i = 0; i < personCnt; i++) {
    dfs(i, 0);
  }

  return flag;
};

console.log(solution(input));
