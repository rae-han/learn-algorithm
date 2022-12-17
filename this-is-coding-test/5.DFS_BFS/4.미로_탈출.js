// maze = "111111 000001 111111 100000 111111"
// maze = "101010 111111 000001 111111 111111"
const maze = "11000111 01111101 00000011 11111010 10001110 11100000 11111111"
const result = 32;
const graph = maze.split(' ').map(item => item.split('').map(value => parseInt(value, 10)));
const next = [[1, 0], [0, 1], [-1, 0], [0, -1]];

const bfs = () => {

}

const handler = (graph) => {
  const queue = [];
  queue.push([0, 0])

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();

    next.forEach(([x, y]) => {
      const [nx, ny] = [cx+x, cy+y]

      if (nx >= 0 && ny >= 0 && nx < graph.length && ny < graph[0].length && graph[nx][ny] === 1) {

        graph[nx][ny] = graph[cx][cy] + 1;
        queue.push([nx, ny])
      }
    })
  }

  return graph
}

handler(graph)
console.log(graph[graph.length-1][graph[0].length-1])



