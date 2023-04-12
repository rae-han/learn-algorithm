const fs = require("fs");
// env
const readFileSyncAddress = "./dev/stdin";
// const readFileSyncAddress = "./10845.txt";

const [n, ...arr] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

function Node(data) {
  this.next = null;
  this.data = data;
}

function Queue() {
  this.head = null;
  this.tail = null;
  this.length = 0;

  this.push = function (data) {
    const newNode = new Node(data);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.length += 1;
    this.tail = newNode;
  };
  this.pop = function () {
    if (this.length === 0) {
      return -1;
    }

    const popItem = this.head;
    this.head = popItem.next;
    this.length -= 1;

    return popItem.data;
  };
  this.front = function () {
    if (!this.length) {
      return -1;
    }
    return this.head.data;
  };
  this.back = function () {
    if (!this.length) {
      return -1;
    }
    return this.tail.data;
  };
  this.size = function () {
    return this.length;
  };
  this.empty = function () {
    return this.length ? 0 : 1;
  };
}

let answer = [];
let queue = new Queue();
const command = arr.map((v) => v.split(" "));
command.forEach(([cmd, data]) => {
  data ? queue[cmd](data) : answer.push(queue[cmd]());
});

console.log(answer.join("\n"));
