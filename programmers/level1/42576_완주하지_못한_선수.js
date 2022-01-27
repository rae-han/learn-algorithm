function solution(participant, completion) {
  // return participant.sort().find((value, index) => value !== completion[index], completion.sort()); // 48,68,101,106,93
  // return participant.find(name=>!completion[name]--, completion.forEach(name=>completion[name]=(completion[name]??0)+1));
  return participant.find(name=>!completion[name]--, completion.forEach(name=>completion[name]=(completion[name]|0)+1)); // 20,31,33,37,42
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
