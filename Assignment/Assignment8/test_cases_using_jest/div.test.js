const basic_arithmatic = require('./basic_arithmatic')

// For Positive numbers
test('Divide two positive numbers', () => {
  expect(basic_arithmatic.divTwoNumbers(10, 2)).toBe(5);
});

// For Negative numbers
test('Divide two negative numbers', () => {
  expect(basic_arithmatic.divTwoNumbers(-10, -2)).toBe(5);
});

// For Zero values
test('Divide by zero', () => {
  expect(basic_arithmatic.divTwoNumbers(0, 5)).toBe(0);
});

// For One positive number and one negative number
test('Divide positive number by negative number', () => {
  expect(basic_arithmatic.divTwoNumbers(10, -2)).toBe(-5);
});

// For Decimal numbers
test('Divide decimal numbers', () => {
  expect(basic_arithmatic.divTwoNumbers(3.5, 2)).toBeCloseTo(1.75);
});

// For Divide by zero
test('Divide by zero', () => {
  expect(basic_arithmatic.divTwoNumbers(10, 0)).toBe(Infinity);
});

// For non-numeric inputs
test('Divide non-numeric inputs', () => {
  expect(basic_arithmatic.divTwoNumbers("10", 2)).toBe(NaN);
});

// For Missing arguments
test('Divide with missing arguments', () => {
  expect(basic_arithmatic.divTwoNumbers(10)).toBe(NaN);
});

// For Extra arguments
test('Divide with extra arguments', () => {
  expect(basic_arithmatic.divTwoNumbers(10, 2, 5)).toBe(5);
});
