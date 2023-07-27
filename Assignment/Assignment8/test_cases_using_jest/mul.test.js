const basic_arithmatic = require('./basic_arithmatic');

describe('basic_arithmatic.mulTwoNumbers', () => {
  test('mulTwoNumbers(5,7) is return 35', () => {
    expect(basic_arithmatic.mulTwoNumbers(5, 7)).toBe(35);
  });

  test('mulTwoNumbers(-10,-5) is return 50', () => {
    expect(basic_arithmatic.mulTwoNumbers(-10, -5)).toBe(50);
  });

  test('mulTwoNumbers(0,0) is return 0', () => {
    expect(basic_arithmatic.mulTwoNumbers(0, 0)).toBe(0);
  });

  test('mulTwoNumbers(8,-3) is return -24', () => {
    expect(basic_arithmatic.mulTwoNumbers(8, -3)).toBe(-24);
  });

  test('mulTwoNumbers(3.14,2.86 is return 8.9904)', () => {
    expect(basic_arithmatic.mulTwoNumbers(3.14, 2.86)).toBeCloseTo(8.9804);
  });

  //For Large Number Args
  test('mulTwoNumbers(999999999,1) is return 999999999', () => {
    expect(basic_arithmatic.mulTwoNumbers(999999999, 1)).toBe(999999999);
  });
  
  //For String Args
  test('mulTwoNumbers(3,"7") is return NaN', () => {
    expect(basic_arithmatic.mulTwoNumbers(3, "7")).toBe(NaN);
  });

  //For Less Args
  test('mulTwoNumbers(3) is return NaN', () => {
    expect(basic_arithmatic.mulTwoNumbers(3)).toBe(NaN);
  });

  //For more Args
  test('mulTwoNumbers(3,5,7) is return 15', () => {
    expect(basic_arithmatic.mulTwoNumbers(3,5,7)).toBe(15);
  });

});
