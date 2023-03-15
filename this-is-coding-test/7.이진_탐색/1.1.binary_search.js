const data = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 16, 20, 24];
const target = 8;

const binarySearchRecursive = (arr, target, start, end) => {
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid + 1;
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, start, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, end);
  }
};

const recursiveResult = binarySearchRecursive(data, target, 0, data.length - 1);
console.log(recursiveResult);

const binarySearchlIterative = (arr, target, start, end) => {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid + 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return 1;
};

const iterativeResult = binarySearchlIterative(
  data,
  target,
  0,
  data.length - 1
);
console.log(iterativeResult);
