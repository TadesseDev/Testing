const reverseString = require('./reverseString');
test("reverse my string", () => {
  expect(reverseString('aaabbbccc')).toBe('cccbbbaaa');
})