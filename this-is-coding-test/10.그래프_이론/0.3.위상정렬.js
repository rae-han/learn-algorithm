let arr = [1, 2, 3, 4, 5];

let iter = arr[Symbol.iterator]();

iter.next();

arr.push(6, 7, 8);

console.log(arr);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
