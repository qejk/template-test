import { expect } from 'chai';
import { Calculator } from '../../src/calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('add', () => {
    expect(calculator.add(1, 2)).to.be.equal(3);
  });

  it('subtract', () => {
    expect(calculator.subtract(2, 1)).to.be.equal(1);
  });

  it('multiply', () => {
    expect(calculator.multiply(2, 2)).to.be.equal(4);
  });

  it('divide', () => {
    expect(calculator.divide(4, 2)).to.be.equal(2);
  });

  it('increment', () => {
    expect(calculator.increment(4)).to.be.equal(5);
  });
});
