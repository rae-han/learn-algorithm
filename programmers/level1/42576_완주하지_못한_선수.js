function solution(participant, completion) {
  // participant.sort();
  // completion.sort();

  // return participant.find((value, index) => value !== completion[index]);

  // return participant.sort().find((value, index) => value !== completion[index], completion.sort());
  // return participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1));
  return participant.find(name => { 
    return !completion[name]-- 
  },completion.map(name=>completion[name]=(completion[name]|0)+1));

}

const testCase = [
  {	participant: ["leo", "kiki", "eden"], completion: ["eden", "kiki"], result: "leo" },
  {	participant: ["marina", "josipa", "nikola", "vinko", "filipa"], completion: ["josipa", "filipa", "marina", "nikola"], result: "vinko" },
  {	participant: ["mislav", "stanko", "mislav", "ana"], completion: ["stanko", "ana", "mislav"], result: "mislav" },
];

testCase.forEach(({participant, completion, result}) => {
  console.log(`######## result: ${result} ########`)
  let res = solution(participant, completion);
  console.log(res);
});