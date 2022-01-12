function solution(lottos = [], win_nums = []) {
  const rank = [6, 6, 5, 4, 3, 2, 1]
  let [max, min] = lottos.reduce(([max, min], cur) => win_nums.includes(cur) ? [++max, ++min] : (cur === 0 ? [++max, min] : [max, min]), [0, 0])
  return [rank[max], rank[min]];
};

// const sample = [
//   { lottos: [44, 1, 0, 0, 31, 25], win_nums: [31, 10, 45, 1, 6, 19], result: [3, 5] },
//   { lottos: [0, 0, 0, 0, 0, 0], win_nums: [38, 19, 20, 40, 15, 25] 	, result: [1, 6] },
//   { lottos: [45, 4, 35, 20, 3, 9], win_nums: [20, 9, 3, 45, 4, 35], result: [1, 1] },
// ];

// sample.forEach(item => {
//   // console.log(`result: ${item.result} / solution: ${solution(item.lottos, item.win_nums)}`);
// });