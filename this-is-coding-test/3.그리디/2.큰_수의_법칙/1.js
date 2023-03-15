const [n, m, k] = [5, 8, 3];
const data = [2, 4, 5, 4, 6];

const [biggest, big, ...rest] = data.sort((a, b) => -(a - b));

const share = Math.floor(m / (k + 1));
const remainder = m % (k + 1);

console.log(share, remainder);

const result = (biggest * k + big) * share + remainder * biggest;

console.log(result);
