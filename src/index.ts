export { Calculator } from './calculator';

export interface MyInterface {
  myMethod(arg: string): string;
  myOtherMethod(arg: number): number;
}

export type MyType = string;

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
const baz = 'baz';
const bar = 'bar';
const abc = 'abc';
const def = 'def';
const ghi = 'ghi';

export {
  add,
  subtract,
  multiply,
  divide,
  increment,
  foo,
  baz,
  bar,
  abc,
  def,
  ghi,
};
