import { expect } from 'chai';

import { add } from '../../src/index';

describe('tests', () => {
  it('add', () => {
    expect(add(1, 2)).to.be.equal(3);
  });
});
