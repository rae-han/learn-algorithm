const data = [1, 2, 3, 4, 5, 6];
const unions = [
  [1, 4],
  [2, 3],
  [2, 4],
  [5, 6],
];
// const unions = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
//   [5, 6],
// ];
// const unions = [
//   [1, 2],
//   [1, 3],
//   [2, 3],
// ];

const parent = {};

data.forEach((value) => (parent[value] = value));
console.log(1, parent);

// const findParents = (n) => {
//   if (parent[n] !== n) {
//     return findParents(parent[n]);
//   }
//
//   return n;
// };

const findParents = (parent, n) => {
  if (parent[n] !== n) {
    parent[n] = findParents(parent, parent[n]);
  }

  return parent[n];
};

unions.forEach(([x, y]) => {
  let _x = findParents(parent, x);
  let _y = findParents(parent, y);

  console.log(3, x, y, "//", _x, _y);

  if (_x === _y) {
    console.log("Cycle!!!!");
  }

  if (_x < _y) {
    parent[_y] = _x;
  } else {
    parent[_x] = _y;
  }
});

console.log(2, parent);

for (let [key, value] of Object.entries(parent)) {
  console.log(123, key, value, findParents(parent, value));
}

console.log(4, parent);
