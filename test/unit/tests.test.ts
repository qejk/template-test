import { expect } from 'chai';
import {
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
  Calculator,
} from '../../src/index';

describe('tests', () => {
  describe('Calculator', () => {
    it('returns true for zero number', () => {
      expect(new Calculator().isZero(0)).to.be.true;
    });
    it('returns false for non-zero number', () => {
      expect(new Calculator().isZero(1)).to.be.false;
    });
  });

  it('add', () => {
    expect(add(1, 2)).to.be.equal(3);
  });

  it('subtract', () => {
    expect(subtract(2, 1)).to.be.equal(1);
  });

  it('multiply', () => {
    expect(multiply(2, 2)).to.be.equal(4);
  });

  it('divide', () => {
    expect(divide(4, 2)).to.be.equal(2);
  });

  it('increment', () => {
    expect(increment(4)).to.be.equal(5);
  });
  it('foo', () => {
    expect(foo).to.be.equal('foo');
  });
  it('baz', () => {
    expect(baz).to.be.equal('baz');
  });
  it('bar', () => {
    expect(bar).to.be.equal('bar');
  });
  it('abc', () => {
    expect(abc).to.be.equal('abc');
  });
  it('def', () => {
    expect(def).to.be.equal('def');
  });
  it('ghi', () => {
    expect(ghi).to.be.equal('ghi');
  });
});
