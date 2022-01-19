function solution(participant, completion) {
  // participant.sort();
  // completion.sort();

  // return participant.find((value, index) => value !== completion[index]);

  // return participant.sort().find((value, index) => value !== completion[index], completion.sort()); // 48,68,101,106,93
  // return participant.find(name=>!completion[name]--,completion.forEach(name=>completion[name]=(completion[name]??0)+1)); // 20,31,33,37,42
  // return participant.find(name=>!completion[name]--,completion.forEach(name=>completion[name]=(completion[name]||0)+1)); // 20,31,33,37,42
  // return participant.find(name=>!completion[name]--,completion.forEach(name=>completion[name]=(completion[name]|0)+1)); // 20,31,33,37,42

  const res = participant.reduce((pre, cur, idx) => {
    console.log('####')
    console.log(pre, cur)
    console.log(pre[cur]|0);
    console.log(123, completion[idx])
    console.log((pre[completion[idx]]|0));
    pre[cur] = (pre[cur]|0)+1;
    pre[completion[idx]] = (pre[completion[idx]]|0)-1;
    return pre;
  },{})

  console.log(res)

}

const testCase = [
  {	participant: ["leo", "kiki", "eden"], completion: ["eden", "kiki"], result: "leo" },
  {	participant: ["marina", "josipa", "nikola", "vinko", "filipa"], completion: ["josipa", "filipa", "marina", "nikola"], result: "vinko" },
  {	participant: ["mislav", "stanko", "mislav", "ana"], completion: ["stanko", "ana", "mislav"], result: "mislav" },
  {	participant: ["a", "b", "a", "c"], completion: ["a", "b", "a"], result: "c" },
];

testCase.forEach(({participant, completion, result}) => {
  console.log(`######## result: ${result} ########`)
  let res = solution(participant, completion);
  console.log(res);
});
