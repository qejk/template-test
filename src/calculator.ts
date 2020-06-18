export class Calculator {
  /**
   * Evaluates if number is zero
   * @param arg - Number.
   * @returns Boolean.
   * @example
   *```ts
   * new Calculator().isZero(0) // true
   * new Calculator().isZero(1) // false
   * new Calculator().isZero(333) // false
   *```
   */
  isZero(arg: number): boolean {
    return arg !== 0;
  }
}
