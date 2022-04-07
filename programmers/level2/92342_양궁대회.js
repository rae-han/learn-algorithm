const testcases = [
  // { n: 0, info: [0,0,0,0,0,0,0,0,0,0,0], result: [0,0,0,0,0,0,0,0,0,0,0] },
  // { n: 5, info: [2,1,1,1,0,0,0,0,0,0,0], result: [0,2,2,0,1,0,0,0,0,0,0] },
  // { n: 1, info: [1,0,0,0,0,0,0,0,0,0,0], result: [-1] },
  { n: 9, info: [0,0,1,2,0,1,1,1,1,1,1], result: [1,1,2,0,1,2,2,0,0,0,0] },
  // { n: 10, info: [0,0,0,0,0,0,0,0,3,4,3], result: [1,1,1,1,1,1,1,1,0,0,2] },
  // { n: 8, info: [4,0,3,0,2,0,1,0,0,0,0], result: [0,1,0,1,3,1,2,0,0,0,0] },
]


const solution = (n, info) => {
  let result = [[-1], 0];

  const compareScore = (pre, cur) => {
    for(let idx=10; idx >= 0; idx--) {
      // console.log('pre', pre)
      console.log(idx, pre[idx], cur[idx]);
      if(pre[idx] !== 0 || cur[idx] !== 0) {
        console.log(idx, pre[idx], cur[idx]);
        return cur[idx] > pre[idx];
      }
    }
  }

  const calculateScore = (apeach, ryan) => {
    const [apeachScore, ryanScore] = ryan.reduce((acc, cur, idx) =>{
      const score = 10-idx;

      if(apeach[idx] > cur) {
        acc[0] = acc[0] + score
      } else if(cur > apeach[idx]) {
        acc[1] = acc[1] + score
      }

      return acc;
    }, [0, 0])

    const differenceScore = ryanScore-apeachScore;

    if(result[1] === 0 && differenceScore > 0) {
      result = [[...ryan], differenceScore];
      return;
    }

    if(differenceScore >= result[1]) {
      if(differenceScore > result[1]) {
        result = [[...ryan], differenceScore]
      }

      if(differenceScore === result[1] && compareScore(result[0], ryan)) {
        result = [[...ryan], differenceScore]
      }
      // console.log('after CompareDefferenceScore', differenceScore, result[1]);
      // console.log('before CompareScore', result[0], ryan)
      // const compare = compareScore(result[0], ryan);
      // console.log(compare)
      // if(differenceScore === result[1] && compare) {
      //   result = [[...ryan], differenceScore]
      //   console.log(result)
      // }
    }
  }

  // n: 화살 숫자, info: 어피치 과녁 상태
  const explorer = (n, apeach, depth, ryan) => {
    // console.log(`n: ${n}, apeach: ${apeach}, depth: ${depth}, ryan: ${ryan}`)
    // console.log('depth', depth)
    if(depth === 0) {
      // console.log(apeach)
    }

    if(n === 0 || depth === 10) {
      ryan[depth] += n;
      // console.log(ryan)
      calculateScore(apeach, ryan);
      ryan[depth] -= n;
      return;
    }

    if(n > apeach[depth]) {
      ryan[depth] = apeach[depth]+1;
      explorer(n-(apeach[depth]+1), apeach, depth+1, ryan);
    }

    ryan[depth] = 0;
    explorer(n, apeach, depth+1, ryan);
  }

  explorer(n, info, 0, Array.from({length: 11}, () => 0));

  return result[0];
};

const testResult = testcases.map(({n, info, result}) => ({ solution: solution(n, info), result }));
testResult.forEach(({info, solution, result}) => console.log(solution, result))

//* 고려 사항
//? 1. 화살 갯수 
//? 2. 뺏은 점수
//? 3. 내가 얻은 점수
//? 4. 점수 더 낮은거 

// const test = [
//   { main: 1, sub: 1 },
//   { main: 1, sub: 2 },
//   { main: 1, sub: 3 },
//   { main: 2, sub: 4 },
//   { main: 2, sub: 5 },
//   { main: 2, sub: 6 },
//   { main: 3, sub: 7 },
//   { main: 3, sub: 8 },
//   { main: 3, sub: 9 },
// ];

// // let result = test.reverse().sort((a, b) => b.main - a.main);
// let result = test.sort((a, b) => b.main - a.main);
// console.log(result);
