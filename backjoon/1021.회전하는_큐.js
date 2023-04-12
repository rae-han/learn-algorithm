const fs = require("fs");
// env
const readFileSyncAddress = "./dev/stdin";
// const readFileSyncAddress = "./1021.txt";

const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const length = parseInt(input[0].split(" ")[0]);
const target = input[1].split(" ").map((t) => parseInt(t, 10));

const queue = Array.from({ length }, (_, i) => i + 1);

let result = 0;
let cur = 0;

for (let i = 0; i < target.length; i++) {
  const idx = queue.findIndex((q) => q === target[i]);

  const [a, b] = [cur - idx, idx - cur].map((num) =>
    num < 0 ? num + queue.length : num
  );

  result += Math.min(a, b);
  queue.splice(idx, 1);
  cur = idx;
}

console.log(result);
