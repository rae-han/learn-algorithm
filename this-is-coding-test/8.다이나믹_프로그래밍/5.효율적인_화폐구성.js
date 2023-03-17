const target = 23;
const money = [2, 3, 4];
let cache = Array.from({ length: target + 1 }, () => Infinity);
cache[0] = 0;

money.forEach((item) => {
  for (let i = item; i <= target; i++) {
    cache[i] = Math.min(cache[i], cache[i - item] + 1);
  }
});

// console.log(cache);

const arrayLike = { length: 10 };

let test1 = Array.from(arrayLike).fill([1, 2, 3]);
console.log(test1);
test1[0][0] = 10;
console.log(test1);

console.time("2");
let test2 = Array.from(arrayLike, () => [1, 2, 3]);
console.log(test2);
console.timeEnd("2");

console.time("3");
let test3 = Array.from(arrayLike).map(() => [1, 2, 3]);
console.log(test3);
console.timeEnd("3");
