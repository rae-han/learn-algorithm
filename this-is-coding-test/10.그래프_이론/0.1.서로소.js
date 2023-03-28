const data = [1, 2, 3, 4, 5, 6];
const unions1 = [
  [1, 4],
  [2, 3],
  [2, 4],
  [5, 6],
];
const unions2 = [
  [5, 6],
  [4, 5],
  [3, 4],
  [2, 3],
  [1, 2],
];
// const unions = [
//   [1, 2],
//   [1, 3],
//   [2, 3],
// ];

// const parent = Array.from({ length: data.length + 1 }).map((_, index) => index);
const parent = {};

data.forEach((v) => (parent[v] = v));
console.log(1, parent);

const findRoot = (parent, n) => {
  if (n !== parent[n]) {
    parent[n] = findRoot(parent, parent[n]);
  }

  return parent[n];
};

const unionNode = (parent, a, b) => {
  a = findRoot(parent, a);
  b = findRoot(parent, b);

  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
};

// unions1.forEach(([x, y]) => {
//   unionNode(parent, x, y);
// });

unions1.forEach(([x, y]) => {
  console.log(x, y, findRoot(parent, x), findRoot(parent, y));
  if (findRoot(parent, x) === findRoot(parent, y)) {
    console.log("Cycle!!!!!!!!!!!!!!!!!!!!!");
  } else {
    unionNode(parent, x, y);
  }
});

console.log(2, parent);

for (let [key, value] of Object.entries(parent)) {
  console.log(findRoot(parent, key));
}

console.log(3, parent);
