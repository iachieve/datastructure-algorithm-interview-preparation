const digitsProduct = require('../challenges/digitsProduct');

describe('find the smallest positive integer the product of whose digits is equal to product', () => {
  it('test #1 ', () => {
    let input = 12;
    let expected = 26;
    let actual = digitsProduct(input);
    expect(actual).toBe(expected);
  });
})
