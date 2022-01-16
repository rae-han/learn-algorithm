function solution(participant, completion) {
  // participant.sort();
  // completion.sort();

  // return participant.find((value, index) => value !== completion[index]);

  // return participant.sort().find((value, index) => value !== completion[index], completion.sort()); // 48,68,101,106,93
  return participant.find(name=>!completion[name]--,completion.forEach(name=>completion[name]=(completion[name]??0)+1)); // 20,31,33,37,42
  return participant.find(name=>!completion[name]--,completion.forEach(name=>completion[name]=(completion[name]||0)+1)); // 20,31,33,37,42
  return participant.find(name=>!completion[name]--,completion.forEach(name=>completion[name]=(completion[name]|0)+1)); // 20,31,33,37,42

  // const result = participant.find(name => {
  // // const result = participant.find(function(name) {
  //   console.log('completion', completion);
  //   console.log('completion[name]', completion[name]);
  //   console.log(this)
  //   return !completion[name]-- 
  // },completion.map(name=>{
  //   console.log('completion', completion);
  //   console.log('name', name)
  //   console.log('completion[name]', completion[name]);
  //   return completion[name]=(completion[name]??0)+1
  // }));
  // console.log('result', result);

  return participant.find(function(name) { return !this[name]-- }, completion.reduce((pre, cur) => ({ ...pre, [cur]: (pre[cur]+1 || 1) }), {}))

  const result = participant.find(function(name) {
      // console.log('completion', completion);
      // console.log('completion[name]', completion[name]);
      console.log('this', this)
      return !this[name]-- 
    },completion.reduce((pre, cur) => {
      console.log('pre', pre, cur)
      console.log(pre[cur]);
      // return pre[cur] ? { ...pre, [cur]: pre[cur]+1 } : { ...pre, [cur]: 1 };
      return { ...pre, [cur]: (pre[cur]+1 || 1) }
    }, {}));
    console.log('result', result);

  return result;

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

// console.log('bit operation');
// console.log(0|0);
// console.log(0|1);
// console.log(1|0);
// console.log(1|1);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// let res = arr1.map(value => {
//   console.log(value);
//   console.log(this)
// }, arr2)

const arr = [2, 1, 0];
const arrMap = arr.map(value => !value--);
console.log(arrMap);