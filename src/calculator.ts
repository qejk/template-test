export class Calculator {
  /**
   * Adds a number to number.
   * @param a - First number.
   * @param b - Second number.
   * @returns Number.
   */
  public add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Subtracts a numbers from number.
   * @param a - First number.
   * @param b - Second number.
   * @returns Number.
   */
  public subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Multiplies a numbers by number.
   * @param a - First number.
   * @param b - Second number.
   * @returns Number.
   */
  public multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Divide a numbers by number.
   * @param a - First number.
   * @param b - Second number.
   * @returns Number.
   */
  public divide(a: number, b: number): number {
    return a / b;
  }

  /**
   * Increment number by +1.
   * @param a - Number.
   * @returns Number.
   */
  public increment(a: number): number {
    return a + 1;
  }
}
