let num1 = parseInt("1234black");
console.log(`num1: ${num1}`); // 1234
let num2 = parseInt("");
console.log(`num2: ${num2}`); // NaN
let num3 = parseInt("0xA");
console.log(`num3: ${num3}`); // 10
let num4 = parseInt("22.5");
console.log(`num4: ${num4}`); // 22
let num5 = parseInt("80");
console.log(`num5: ${num5}`); // 80
let num6 = parseInt("0xf");
console.log(`num6: ${num6}`); // 15
let num7 = parseInt("f", 16);
console.log(`num7: ${num7}`);

console.log(1e10);