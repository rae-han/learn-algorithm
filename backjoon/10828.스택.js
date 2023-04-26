const fs = require("fs");
// env
const readFileSyncAddress = "./dev/stdin";
// const readFileSyncAddress = "./10828.txt";
const [n, ...arr] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");


function Node(data, next) {
  this.data = data;
  this.next = next;
}

function Stack() {
  this.peak = null;
  this.length = 0;

  this.push = function (data) {
    this.peak = new Node(data, this.peak);
    this.length += 1;
  };
  this.pop = function () {
    if (this.length === 0) {
      return -1;
    }

    const popItem = this.peak;
    this.peak = popItem.next;
    this.length -= 1;
    return popItem.data;
  };
  this.top = function () {
    if (this.length === 0) {
      return -1;
    }
    return this.peak.data;
  };
  this.size = function () {
    return this.length;
  };
  this.empty = function () {
    return this.length ? 0 : 1;
  };
}

let answer = [];
let stack = new Stack();
const command = arr.map((v) => v.split(" "));
command.forEach(([cmd, data]) => {
  data ? stack[cmd](data) : answer.push(stack[cmd]());
});

console.log(answer.join("\n"));
