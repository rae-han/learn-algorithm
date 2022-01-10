function solution(lottos = [], win_nums = []) {
  const rank = [6, 6, 5, 4, 3, 2, 1]

  let min = lottos.filter(lotto => win_nums.includes(lotto));
  let emptyLength = lottos.filter(lotto => lotto === 0).length;
  let answer = [rank[min.length+emptyLength], rank[min.length]];
  return answer;
};

const sample = [
  { lottos: [44, 1, 0, 0, 31, 25], win_nums: [31, 10, 45, 1, 6, 19], result: [3, 5] },
  { lottos: [0, 0, 0, 0, 0, 0], win_nums: [38, 19, 20, 40, 15, 25] 	, result: [1, 6] },
  { lottos: [45, 4, 35, 20, 3, 9], win_nums: [20, 9, 3, 45, 4, 35], result: [1, 1] },
];

sample.forEach(item => {
  console.log(`result: ${item.result} / solution: ${solution(item.lottos, item.win_nums)}`);
});