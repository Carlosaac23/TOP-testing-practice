import { capitalize, reverseString } from './main';

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
