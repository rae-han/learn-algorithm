const fs = require('fs');
// env
const readFileSyncAddress = './dev/stdin';
// const readFileSyncAddress = "./10828.txt";
const [n, ...arr] = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

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
    return this.length
  };
  this.empty = function () {
    return this.length ? 0 : 1;
  };
}

let answer = [];
let stack = new Stack();
const command = arr.map(v=>v.split(' '));
command.forEach(v=>{
  switch(v[0]){
    case 'push':
      stack.push(v[1])
      break;
    case 'pop':
      answer.push(stack.pop());
      break;
    case 'size':
      answer.push(stack.size())
      break;
    case 'empty':
      answer.push(stack.empty())
      break;
    case 'top':
      answer.push(stack.top())
      break;
  }
})

console.log(answer.join('\n'))

// function solution(iter) {
//   console.log(iter)
//   const answer = [];
//
//   const stack = new Stack();
//
//   const result = iter
//     .map((item) => item.trim().split(' '))
//     // .filter(([cmd, num]) => num ? (stack[cmd](num), false) : stack[cmd]())
//     .filter(([cmd, num]) => {
//       return num ? false : 1
//     })
//   console.log(123, result)
//
//   // for (let i = 0; i < iter.length; i++) {
//   //   const [cmd, num] = iter[i].trim().split(" ");
//   //   num ? stack[cmd](num) : answer.push(stack[cmd]());
//   // }
//
//   console.log(answer.join("\n"));
// }

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let input = [];
// rl.on("line", function (line) {
//   if (line !== '') {
//     input.push(line);
//   }
// }).on("close", function () {
//   solution(input);
//   process.exit();
// });
