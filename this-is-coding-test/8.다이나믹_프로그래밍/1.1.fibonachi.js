const cache = {};

// const fibonacciRecu = (x) => {
//   if (x === 1 || x === 2) {
//     return 1;
//   }
//
//   if (cache[x]) {
//     return cache[x];
//   } else {
//     cache[x] = fibonacciRecu(x - 1) + fibonacciRecu(x - 2);
//     return cache[x];
//   }
// };

// console.log(fibonacciRecu(4));

const fibonacciIter = (x) => {
  cache[1] = 1;
  cache[2] = 1;

  for (let i = 3; i <= x; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache[x];
};

console.log(fibonacciIter(5));
