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

  console.log(stages);
  stages.list.pop();
  stages.list.shift();

  console.log(stages);

  stages.list.sort((a, b) => {
    return a.rate <= b.rate ? 1 : -1;
  })


  console.log(stages)

  stages = stages.list.map(stage => stage.idx);
  
  return stages;

  let answer = []
  let currentTotal = stages.length;
  for(let i=1; i<N+1; i++) {
    const current = stages.filter(n => n===i).length;
    answer.push({ idx: i, rate: current/currentTotal});
    currentTotal-=current;
  }
  console.log(answer)
 
  answer = answer.sort((a, b) => b.rate - a.rate).map(s => s.idx);
  console.log(answer)
  return answer;
}


const testCases = [
  { number: 5, stages: [2,1,2,2,4,3,3], result: [3,4,2,1,5] },
  { number: 5, stages: [2,1,2,6,2,4,3,3], result: [3,4,2,1,5] },
  { number: 4, stages: [4,4,4,4,4], result: [4,1,2,3] },
]

testCases.forEach(({ number, stages, result }) => {
  const log = `result: ${result}, solution: ${solution(number, stages)}`;
  console.log(log)
})
