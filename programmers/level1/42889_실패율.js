function solution(N, stages) {
  console.log(N, stages)
  return 1;
}


const testCases = [
  { number: 5, stages: [2,1,2,6,2,4,3,3], result: [3,4,2,1,5]},
  { number: 4, stages: [4,4,4,4,4], result: [4,1,2,3]},
]

testCases.forEach(({ number, stages, result }) => {
  console.log(`result: ${result}, solution: ${solution(number, stages)}`)
})