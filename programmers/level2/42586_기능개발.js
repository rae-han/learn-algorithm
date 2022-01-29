// 42586 기능개발
const solution = (progresses, speeds) => {
  // first 
  /*
  let answer = [];
  let testcount = 0;

  while(testcount<20) {
    if(progresses[0] >= 100) {
      let idx = progresses.findIndex(progress => progress<100);

      if(idx !== -1) {
        progresses = progresses.slice(idx);
        speeds = speeds.slice(idx);
        answer.push(idx);
      } else {  
        answer.push(progresses.length);
        return answer;
      }
    }

    progresses = progresses.map((progress, idx) => progress+speeds[idx]);
  }
  // */

  // second
  // console.log(progresses.map((progress, idx) => (Math.ceil((100-progress) / speeds[idx]))|0))
  let newProgresses =  progresses
    .map((progress, idx) => Math.ceil((100-progress) / speeds[idx])|0)
    .reduce(({max, count, list}, cur) => {
      console.log('#', max, count, list, 'cur', cur)
      let result = max>=cur ? { max, count: count+1, list } : { max: cur, count: 0, list: [...list, count+1] };
      console.log('result', result);
      return result;
    }, { max: 0, count: 0, list: []});
  
  console.log(newProgresses)
};

const testcases = [
  { progresses: [93, 30, 55], speeds: [1, 30, 5], result: [2, 1] },
  // { progresses: [95, 90, 99, 99, 80, 99], speeds: [1, 1, 1, 1, 1, 1], result: [1, 3, 2] },
  { progresses: [90, 70, 90, 80, 70], speeds: [1, 1, 1, 1, 1], result: [1, 4] },
  // { progresses: [100, 0], speeds: [0, 100], result: [1, 1] },

];

testcases.forEach(({progresses, speeds, result}) => console.log(solution(progresses, speeds), result));

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(cur => {
//   console.log(cur);
//   console.log(arr)
// }, arr = [6, 7, 8].map(v => v));