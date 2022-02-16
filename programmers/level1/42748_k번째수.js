function solution(array, commands) {
  return commands.reduce((acc, [start, end, idx], i) => {
    return [ ...acc, array.slice(start-1, end).sort((a, b) => a-b)[idx-1]]
  }, []);

  return commands.map(([start, end, idx]) =>  array.slice(start-1, end).sort((a, b) => a-b)[idx-1])
}

const testcases = [
  { array: [1, 5, 2, 6, 3, 7, 4], commands:	[[2, 5, 3], [4, 4, 1], [1, 7, 3]], result:	[5, 6, 3] },
];

testcases.forEach(testcase => {
  console.log(`solution: ${solution(testcase.array, testcase.commands)} // result: ${testcase.result}`);
})


