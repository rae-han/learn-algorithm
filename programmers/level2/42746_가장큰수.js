const testcases = [
  { numbers: [6, 10, 2], result: "6210" },
  { numbers: [3, 30, 34, 5, 9], result: "9534330" },
  { numbers: [3, 9, 0], result: "930" },
  { numbers: [0, 0], result: "0" },
];

const solution = numbers => numbers.map(n => n+'').sort((a, b) => (b+a) - (a+b)).join('').replace(/^0+/, '0');

testcases.forEach(({numbers, result}) => console.log(solution(numbers), result));

console.log('######## test ########');
// console.log("" > "");
// console.log("" < "");
// 단순 문자열 비교
console.log("10" > "3"); // false
console.log("10" < "3"); // true

// 자리수가 다른데 앞자리가 같다면?
console.log("30" > "3"); // true
console.log("30" < "3"); // false

console.log("103" > "310"); // false
console.log("103" < "310"); // true
console.log("303" > "330"); // false
console.log("303" < "330"); // true
