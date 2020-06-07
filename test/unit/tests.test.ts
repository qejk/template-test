import { expect } from 'chai';
import { add, subtract, multiply } from '../../src/index';

describe('tests', () => {
  it('add', () => {
    expect(add(1, 2)).to.be.equal(3);
  });

  it('subtract', () => {
    expect(subtract(2, 1)).to.be.equal(1);
  });

  it('multiply', () => {
    expect(multiply(2, 2)).to.be.equal(4);
  });
});
