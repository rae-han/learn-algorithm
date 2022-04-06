const testcases = [
  // { n: 0, info: [0,0,0,0,0,0,0,0,0,0,0], result: [0,0,0,0,0,0,0,0,0,0,0] },
  // { n: 5, info: [2,1,1,1,0,0,0,0,0,0,0], result: [0,2,2,0,1,0,0,0,0,0,0] },
  // { n: 1, info: [1,0,0,0,0,0,0,0,0,0,0], result: [-1] },
  // { n: 9, info: [0,0,1,2,0,1,1,1,1,1,1], result: [1,1,2,0,1,2,2,0,0,0,0] },
  // { n: 10, info: [0,0,0,0,0,0,0,0,3,4,3], result: [1,1,1,1,1,1,1,1,0,0,2] },
  // { n: 8, info: [4,0,3,0,2,0,1,0,0,0,0], result: [0,1,0,1,3,1,2,0,0,0,0] },
  { n: 0, info: [0,0,0,0,0,0,0,0,0,0,0], result: [0,0,0,0,0,0,0,0,0,0,0] },
]

const solution = (n, info) => {
  // let cost = info.map((v, idx) => ({ idx, count: v+1, point: (10-idx)*(v ? 2 : 1)/(v+1) })).sort((a, b) => b.point - a.point)
  let cost = info.reverse();
  cost = cost.map((v, idx) => ({ idx, count: v+1, point: idx*(v ? 2 : 1)/(v+1)}));
  
  console.log('3. cost', cost)
  cost = cost.sort((a, b) => b.point - a.point);
  

  console.log('1. cost', cost)

  cost = cost.reduce((acc, {idx, count}, i) => {
    console.log(idx, count)
    if(n >= count) {
      n = n-count;
      acc.list[idx] = count;
      acc.ryan = acc.ryan + idx
    } else {
      if(count !== 1) {
        acc.apeach = acc.apeach + idx
      }
    }

    return acc;
  // }, new Array(11).fill(0));
  }, { list: new Array(11).fill(0), apeach: 0, ryan: 0 });

  console.log('2. cost', cost);

  if(cost.apeach >= cost.ryan) {
    return [-1]
  }

  if(n !== 0) {
    cost.list[0] = n;
  }

  return cost.list.reverse();
}

const testResult = testcases.map(({n, info, result}) => ({ info, solution: solution(n, info), result }));
testResult.forEach(({info, solution, result}) => console.log(info.reverse(), solution, result))

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
