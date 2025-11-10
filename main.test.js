import { capitalize } from './main';

test('takes a string and returns it with the first character capitalized', () => {
  const word1 = 'dog';
  const word2 = 'house';
  const word3 = 'car';

  expect(capitalize(word1)).toBe('Dog');
  expect(capitalize(word2)).toBe('House');
  expect(capitalize(word3)).toBe('Car');
});
