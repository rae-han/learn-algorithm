const fs = require("fs");
// env
// const readFileSyncAddress = "./dev/stdin";
const readFileSyncAddress = "./1021.txt";
const testcase = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

console.log(testcase);
