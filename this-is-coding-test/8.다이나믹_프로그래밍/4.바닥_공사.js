const targetLength = 3;

const cache = [0, 1, 3];

const calTileCase = (length) => {
  cache[length] = cache[length - 1] + cache[length - 2] * 2;
};

for (let i = 3; i <= targetLength; i++) {
  calTileCase(i);
}

console.log(cache[targetLength]);
