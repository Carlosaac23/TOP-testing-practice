export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function reverseString(word) {
  return word.split('').reverse().join('');
}

export const calculator = {
  add: (number1, number2) => {
    return number1 + number2;
  },
  subtract: (number1, number2) => {
    return number1 - number2;
  },
  divide: (number1, number2) => {
    return number1 / number2;
  },
  multiply: (number1, number2) => {
    return number1 * number2;
  },
};

export function caesarCipher(string, shiftFactor) {
  const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialCharacters = ' !¡?¿*.,:;ªº@#~[]{}()-_+=/\\|<>"\'`^$%&°';
  const ALPHABET_LENGTH = 26;
  const stringToCipher = string.split('');

  let result = '';

  for (const letter of stringToCipher) {
    if (lowercaseAlphabet.includes(letter)) {
      const letterIndex = lowercaseAlphabet.indexOf(letter);
      const newIndex = (letterIndex + shiftFactor) % ALPHABET_LENGTH;
      const newLetter = lowercaseAlphabet[newIndex];
      result += newLetter;
    } else if (uppercaseAlphabet.includes(letter)) {
      const letterIndex = uppercaseAlphabet.indexOf(letter);
      const newIndex = (letterIndex + shiftFactor) % ALPHABET_LENGTH;
      const newLetter = uppercaseAlphabet[newIndex];
      result += newLetter;
    } else if (specialCharacters.includes(letter)) {
      result += letter;
    }
  }

  return result;
}
