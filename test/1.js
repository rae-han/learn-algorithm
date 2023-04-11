const origin = [1, 2, 3, 4, 5, 6, 7, 8];
let random = [];

random = Array.from({length:origin.length}).map((_, index) => {
  return  origin.splice(Math.floor(Math.random() * (8 - index)), 1)[0];
})