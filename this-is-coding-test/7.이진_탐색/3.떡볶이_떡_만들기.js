const purpose = 6;
// const items = [19, 15, 10, 17];
const items = [19, 15, 10, 18];

const solveQueue = (target, list) => {
  let start = 0;
  let end = Math.max(...list);
  let result = 0;
  let previous = 0;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    console.log(mid);

    const value = items
      .map((item) => (item - mid < 0 ? 0 : item - mid))
      .reduce((cur, acc) => cur + acc);

    if (value > target) {
      if (previous === mid) {
        return mid;
      }
      start = mid;
      previous = result;
      result = mid;
    } else if (value < target) {
      end = mid;
    } else {
      return result;
    }
  }
};

solveQueue(purpose, items);
