const main = require('./main');
const stringLength = main.stringLength;
const reverseString = main.reverseString;
const capitalize = main.capitalize;
const calculator = main.calc;
test("get string length", () => {
  expect(stringLength('abcdef')).toBe(6);
  expect(() => stringLength('')).toThrow();
  expect(() => stringLength('jkjljljhkbj')).toThrow();
});
test("reverse my string", () => {
  expect(reverseString('aaabbbccc')).toBe('cccbbbaaa');
});
describe('calculator tester', () => {
  const calc = new calculator();
  test('addition', () => {
    expect(calc.add(1, 2)).toBe(3);
    expect(calc.add(5, 5)).toBe(10);
    expect(calc.add(999, 1)).toBe(1000);
  });
  test('subtraction', () => {
    expect(calc.subtract(1, 2)).toBe(-1);
    expect(calc.subtract(5, 5)).toBe(0);
    expect(calc.subtract(999, 1)).toBe(998);
  });

  test('division', () => {
    expect(calc.divide(1, 2)).toBe(0.5);
    expect(calc.divide(5, 5)).toBe(1);
    expect(calc.divide(999, 1)).toBe(999);
  });
  test('multiplication', () => {
    expect(calc.multiply(1, 2)).toBe(2);
    expect(calc.multiply(5, 5)).toBe(25);
    expect(calc.multiply(999, 1)).toBe(999);
  });
});

test('Text capitalization', () => {
  expect(capitalize('abcd')).toBe('Abcd');
  expect(capitalize('ABCD')).toBe('Abcd');
  expect(capitalize('AbCd')).toBe('Abcd');
})
