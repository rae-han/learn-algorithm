const limit = 5;
const init = {
  row: 1,
  col: 1,
};

const plans = ["R", "R", "R", "U", "D", "D"];

const direction = {
  U: { row: -1, col: 0 },
  D: { row: 1, col: 0 },
  R: { row: 0, col: 1 },
  L: { row: 0, col: -1 },
};

const result = plans.reduce((acc, cur) => {
  console.log(acc, cur);
  const row = acc.row + direction[cur].row;
  const col = acc.col + direction[cur].col;

  if (0 >= row || 0 >= col || row > 5 || col > 5) {
    return acc;
  } else {
    return {
      row,
      col,
    };
  }
}, init);

console.log(result);
