const solution = (progresses, speeds) => {
  
};

const testcases = [
  { progresses: [93, 30, 55], speeds: [1, 30, 5], result: [2, 1] },
  { progresses: [95, 90, 99, 99, 80, 99], speeds: [1, 1, 1, 1, 1, 1], result: [1, 3, 2] },
];

testcases.forEach(({progresses, speeds, result}) => console.log(solution(progresses, speeds), result))

