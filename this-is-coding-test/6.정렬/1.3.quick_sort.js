const data = [2, 0, 5, 1, 9, 8, 7, 3, 4, 6];

const quickSort = (arr) => {
  console.log(arr);
  if (arr.length <= 1) {
    return arr;
  }

  let left = [];
  let right = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (pivot >= arr[i]) {
      left = left.concat(arr[i]);
    } else {
      right = right.concat(arr[i]);
    }
  }

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  return [...sortedLeft, pivot, ...sortedRight];
};

console.log(quickSort(data));
