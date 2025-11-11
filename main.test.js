import { calculator, capitalize, reverseString } from './main';

test('takes a string and returns it with the first character capitalized', () => {
  const word1 = 'dog';
  const word2 = 'house';
  const word3 = 'car';

  expect(capitalize(word1)).toBe('Dog');
  expect(capitalize(word2)).toBe('House');
  expect(capitalize(word3)).toBe('Car');
});

test('takes a string and returns it reversed', () => {
  const word1 = 'difficult';
  const word2 = 'hello';
  const word3 = 'sea';

  expect(reverseString(word1)).toBe('tluciffid');
  expect(reverseString(word2)).toBe('olleh');
  expect(reverseString(word3)).toBe('aes');
});

test('a object that contains functions for the basic operations', () => {
  const addition = calculator.add;
  const subtraction = calculator.subtract;
  const division = calculator.divide;
  const product = calculator.multiply;

  expect(addition(2, 2)).toEqual(4);
  expect(addition(2, 8)).toEqual(10);
  expect(addition(-2, 5)).toEqual(3);

  expect(subtraction(10, 3)).toEqual(7);
  expect(subtraction(10, 5)).toEqual(5);
  expect(subtraction(9, 9)).toEqual(0);

  expect(division(10, 5)).toEqual(2);
  expect(division(25, 5)).toEqual(5);
  expect(division(100, 5)).toEqual(20);

  expect(product(3, 8)).toEqual(24);
  expect(product(10, 14)).toEqual(140);
  expect(product(2, 2)).toEqual(4);
});

test('that takes a string and a shift factor and returns it with each character “shifted”', () => {
  const result1 = 'abc';
  const result2 = 'KhOOr';
  const result3 = 'Khoor, Zruog!';
  const result4 = 'Ymnx nx f yjxy rjxxflj';

  expect(caesarCipher('xyz', 3)).toBe(result1);
  expect(caesarCipher('HeLLo', 3)).toBe(result2);
  expect(caesarCipher('Hello, World!', 3)).toBe(result3);
  expect(caesarCipher('This is a test message')).toBe(result4);
});
