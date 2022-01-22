function solution(N, stages) {
  stages = stages.reduce((acc, cur) => {
    console.log(acc, cur)
    console.log(acc[cur])
    acc[cur]=(acc[cur]|0)+1;
    return acc;
  }, new Array(N+2).fill(0));

  console.log('######## reduce result ########')
  console.log(stages)

  console.log('######## reduceRight ########')
  stages = stages.reduceRight((pre, cur, idx) => {
    console.log(`idx: ${idx}`)
    console.log(`cur: ${cur}`);

    pre.count += cur;
    pre.list[idx] = { idx, rate: cur/pre.count }
    return pre;
  }, { count: 0, list: [] })
  console.log(stages)
  
  return 1;
}


const testCases = [
  // { number: 5, stages: [2,1,2,2,4,3,3], result: [3,4,2,1,5] },
  { number: 5, stages: [2,1,2,6,2,4,3,3], result: [3,4,2,1,5] },
  // { number: 4, stages: [4,4,4,4,4], result: [4,1,2,3] },
]

testCases.forEach(({ number, stages, result }) => {
  const log = `result: ${result}, solution: ${solution(number, stages)}`;
  // console.log(log)
})
