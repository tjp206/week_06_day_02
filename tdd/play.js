const assert = require('assert');

// strictEqual - 
// deepStrictEqual - for looking in data structures

const firstArray = [1, 2, 3];
const secondArray = firstArray;
assert.strictEqual(firstArray, secondArray)

assert.deepStrictEqual([1, 2, 3], [1 , 2, 3])

