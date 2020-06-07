/**
 * Adds a number to number.
 * @param a - First number.
 * @param b - Second number.
 * @returns Number.
 */
function add(a: number, b: number): number {
  return a + b;
}
/**
 * Subtracts a numbers from number.
 * @param a - First number.
 * @param b - Second number.
 * @returns Number.
 */
function subtract(a: number, b: number): number {
  return a - b;
}
/**
 * Multiplies a numbers by number.
 * @param a - First number.
 * @param b - Second number.
 * @returns Number.
 */
function multiply(a: number, b: number): number {
  return a * b;
}
/**
 * Divide a numbers by number.
 * @param a - First number.
 * @param b - Second number.
 * @returns Number.
 */
function divide(a: number, b: number): number {
  return a / b;
}
/**
 * Increment number by +1.
 * @param a - Number.
 * @returns Number.
 */
function increment(a: number): number {
  return a + 1;
}

const foo = 'foo';

export { add, subtract, multiply, divide, increment, foo };
