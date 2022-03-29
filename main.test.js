const stringLength = require('./main');

test("get string length", () => {
  expect(stringLength('abcdef')).toBe(6);
});
test("check zero length", () => {
  expect(stringLength('')).toBe(null);
});
test("over max length", () => {
  expect(stringLength('abcwerwerdef')).toBe(null);
});