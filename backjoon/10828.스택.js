function Node(data, size, next) {
  this.data = data;
  this.size = size;
  this.next = next;
}

function Stack() {
  this.peak = null;

  this.push = function (data) {
    const size = this.size();
    this.peak = new Node(data, size + 1, this.peak);
  };
  this.pop = function () {
    if (!this.size()) {
      return -1;
    }

    const data = this.peak.data;
    this.peak = this.peak.next;
    return data;
  };
  this.top = function () {
    return this.peak.data;
  };
  this.size = function () {
    return this.peak ? this.peak.size : 0;
  };
  this.empty = function () {
    return this.size() ? 0 : 1;
  };
}

function solution(input) {
  const iter = input[0];
  const answer = [];

  const stack = new Stack();

  for (let i = 1; i <= iter; i++) {
    const [cmd, num] = input[i].trim().split(" ");
    num ? stack[cmd](num) : answer.push(stack[cmd]());
  }

  console.log(answer.join("\n"));
}

// solution();

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
