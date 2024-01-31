const q = require('loadash');
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = q.map(numbers, n => n * 2);

console.log('Original Array: ', numbers);
console.log('Doubled Array: ', doubledNumbers);