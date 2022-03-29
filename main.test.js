const main = require('./main');
const stringLength = main.stringLength;
const reverseString = main.reverseString;
test("get string length", () => {
  expect(stringLength('abcdef')).toBe(6);
  expect(() => stringLength('')).toThrow();
  expect(() => stringLength('jkjljljhkbj')).toThrow();
});
test("reverse my string", () => {
  expect(reverseString('aaabbbccc')).toBe('cccbbbaaa');
})
