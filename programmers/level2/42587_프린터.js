function solution(priorities, location) {
  let turn = 1;

  while(priorities.length > 0) {
    if(priorities[0] < Math.max(...priorities)) {
      priorities.push(priorities.shift());

      if(--location < 0) location = priorities.length - 1;
    } else {
      priorities.shift();
      if(--location < 0) return turn;
      turn++;
    }
  }
}

const testcases = [
  { priorities: [2, 1, 3, 2], location: 2,	result: 1 },
  { priorities: [1, 1, 9, 1, 1, 1], location: 0,	result: 5 },
]

testcases.forEach(({priorities, location, result}) => {
  console.log(`solution: ${solution(priorities, location)} // result: ${result}`);
})