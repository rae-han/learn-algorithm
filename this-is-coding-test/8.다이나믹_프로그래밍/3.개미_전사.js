const input_data = [1, 5, 1, 5, 1, 1, 5, 1, 1, 5, 1, 5, 1, 5];
const cache = [input_data[0], Math.max(input_data[0], input_data[1])];

function func(x) {
  cache[x] = Math.max(cache[x - 1], cache[x - 2] + input_data[x]);
}

for (let i = 2; i < input_data.length; i++) {
  func(i);
}

console.log(cache);
