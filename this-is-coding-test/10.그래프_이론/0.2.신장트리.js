/**
 * # 문제
 * 노드의 개수 v와 간선의 개수 e가 주어지고
 * 모든 간선에 대한 정보 data([1번 노드, 2번 노드, 비용][])가 주어졌을때
 * 해당 그래프에 대한 최소 신장 트리(모든 그래프가 연결되는 최소 비용)을 구해라.
 */
const [v, e] = [7, 9];
const data = [
  [1, 2, 29],
  [1, 5, 75],
  [2, 3, 35],
  [2, 6, 34],
  [3, 4, 7],
  [4, 6, 23],
  [4, 7, 13],
  [5, 6, 53],
  [6, 7, 25],
];

// 부모 테이블 자기 자신으로 초기화하는 함수.
const initParent = (nodeCount) =>
  Array.from({ length: nodeCount + 1 }, (_, index) => index);

// 해당 노드(x)의 루트 노드를 찾는 함수, 자기 자신이 루트 노드가 아니라면 재귀적으로 호출.
const findParent = (parent, x) => {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }

  return parent[x];
};

// 두 원소가 속한 집합을 합치는 함수.
const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);

  a < b ? (parent[b] = a) : (parent[a] = b);
};

// 비용 순으로 정렬된 간선 정보를 만드는 함수
const makeEdges = (data) =>
  data
    .map(([node1, node2, cost]) => [cost, node1, node2])
    .sort(([costA, ..._restA], [costB, ..._restB]) => costA - costB);

// 간선 순환이 없는지 확인하는 함수.
const checkCycle = (parent, a, b) =>
  findParent(parent, a) === findParent(parent, b);

const reduceCost = (data, nodeCount) => {
  const parent = initParent(nodeCount);
  const edges = makeEdges(data);

  return edges.reduce((acc, [cost, node1, node2]) => {
    if (!checkCycle(parent, node1, node2)) {
      unionParent(parent, node1, node2);
      return acc + cost;
    }

    return acc;
  }, 0);
};

const result = reduceCost(data, v);

console.log(result); // 159
