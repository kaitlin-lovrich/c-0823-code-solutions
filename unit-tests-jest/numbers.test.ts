import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('Expect [1, 2, 3, 4, 5, 6]', () => {
    expect(() => evenNumbers([1, 2, 3, 4, 5, 6])).toBe([2, 4, 6]);
  });
});

describe('toDollars', () => {
  it('Expect 4');
  expect(() => toDollars(4)).toBe('$4.00');
});

describe('divideBy', () => {
  it('Expect [10, 12, 14, 16], 2');
  expect(() => divideBy([10, 12, 14, 16], 2)).toBe([5, 6, 7, 8]);
});

describe('multiplyBy', () => {
  it('Expect {first: 3, second: "four"}, 2');
  expect(() => multiplyBy({ first: 3, second: 'four' }, 2)).toBe({
    first: 6,
    second: 'four',
  });
});
