function solution(phoneNumber = "") {
  // solution 1
  // return phoneNumber.split("").reverse().reduce((acc, digit, i) => [...acc, (i >= 4 ? '*' : digit )], []).reverse().join('');

  // solution 2
  return phoneNumber.replace(/\d(?=\d{4})/g, "*");
}

const testcases = [
  { input: "01033334444",	result: "*******4444" },
  { input: "027778888",	result: "*****8888" },
];

testcases.forEach(test => {
  console.log(`solution: ${solution(test.input)} // result: ${test.result}`)
})

