const number = 26;

const cache = [0, 0];

const func = (x) => {
  cache[x] = cache[x - 1] + 1;

  if (x % 2 === 0) {
    cache[x] = Math.min(cache[x], cache[x / 2] + 1);
  }

  if (x % 3 === 0) {
    cache[x] = Math.min(cache[x], cache[x / 3] + 1);
  }

  if (x % 5 === 0) {
    cache[x] = Math.min(cache[x], cache[x / 5] + 1);
  }
};

for (let i = 2; i <= number; i++) {
  func(i);
}

cache.forEach((c, i) => console.log(`index ${i} - value ${c}`));
