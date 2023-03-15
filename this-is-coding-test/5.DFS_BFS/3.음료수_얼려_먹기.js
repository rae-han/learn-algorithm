// mold = '00110 00011 11111 00000'
const molds = '00000111100000 11111101111110 11011101101110 11011101100000 11011111111111 11011111111100 11000000011111 01111111111111 00000000011111 01111111111000 00011111111000 00000001111000 11111111110011 11100011111111 11100011111111'
const result = 8

const graph = molds.split(' ').map(item => item.split(''));

const dfs = (graph, x, y) => {
  if (x < 0 || y < 0 || x > graph.length - 1 || y > graph[0].length - 1) {
    return false;
  }

  if (parseInt(graph[x][y], 10) === 0) {
    graph[x][y] = 1;

    dfs(graph, x+1, y);
    dfs(graph, x, y+1);
    dfs(graph, x-1, y);
    dfs(graph, x, y-1);
    return true
  }

  return false;
}

const handler = (graph) => {
  let count = 0;

  graph.forEach((row, ridx) => {
    row.forEach((item, idx) => {
      const beFilled = dfs(graph, ridx, idx);

      if (beFilled) count++;
    })
  })

  return count;
}

console.log(handler(graph));