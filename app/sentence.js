const sentence = 'this is sentence with a tomato';

const test1 = typeof sentence === 'string' ? 1 : 0;
const test2 = typeof sentence === 'number' ? 1 : 0;
let test3 = null;

module.exports = { sentence, test1, test2, test3 };
