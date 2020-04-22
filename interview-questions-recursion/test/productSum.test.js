const productSum = require('../challenges/productSum');

describe('testing product sum', () => {
  it('test case #1 ', () => {
    const test = [1, 2, 3, 4, 5];
    const r = productSum(test);
    expect(r).toBeDefined();
    expect(r).toBe(15);
  });

  it('test case #2 ', () => {
    const test = [[[[[5]]]]];
    const r = productSum(test);
    expect(r).toBeDefined();
    expect(r).toBe(600);
  });
  
  it('test case #2 ', () => {
    const test = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
    const r = productSum(test);
    expect(r).toBeDefined();
    expect(r).toBe(12);
  });
});