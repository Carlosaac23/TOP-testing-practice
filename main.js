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

export function caesarCipher(string, shiftFactor) {}
