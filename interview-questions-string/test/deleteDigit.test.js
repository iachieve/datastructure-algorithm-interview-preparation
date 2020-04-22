const deleteDigit = require('../challenges/deleteDigit')

describe('testing deleteDigit function', () => {
  it('test case #1 ', () => {
    const inputTest = 152;
    const expected = 52;
    const actual = deleteDigit(inputTest);
    expect(actual).toBeDefined();
    expect(actual).toBe(expected);
  });
  it('test case #2 ', () => {
    const inputTest = 10;
    const expected = 1;
    const actual = deleteDigit(inputTest);
    expect(actual).toBeDefined();
    expect(actual).toBe(expected);
  });
  it('test case #3 ', () => {
    const inputTest = 222219;
    const expected = 22229;
    const actual = deleteDigit(inputTest);
    expect(actual).toBeDefined();
    expect(actual).toBe(expected);
  });
  it('test case #4 ', () => {
    const inputTest = 109;
    const expected = 19;
    const actual = deleteDigit(inputTest);
    expect(actual).toBeDefined();
    expect(actual).toBe(expected);
  });
  it('test case #5 ', () => {
    const inputTest = 222250;
    const expected = 22250;
    const actual = deleteDigit(inputTest);
    expect(actual).toBeDefined();
    expect(actual).toBe(expected);
  });
});