const lineEncoding = require('../challenges/lineEncoding')

describe('testing lineEncoding function', () => {
  it('test case #1 ', () => {
    const inputTest = "aabbbc";
    const expected = "2a3bc";
    const actual = lineEncoding(inputTest);
    expect(actual).toBeDefined();
    expect(actual).toBe(expected);
  });
  it('test case #2 ', () => {
    const inputTest = "qwertyuioplkjhg";
    const expected = "qwertyuioplkjhg";
    const actual = lineEncoding(inputTest);
    expect(actual).toBeDefined();
    expect(actual).toBe(expected);
  });
  it('test case #3 ', () => {
    const inputTest = "abbcabb";
    const expected = "a2bca2b";
    const actual = lineEncoding(inputTest);
    expect(actual).toBeDefined();
    expect(actual).toBe(expected);
  });
  it('test case #4 ', () => {
    const inputTest = "bbjaadlkjdl";
    const expected = "2bj2adlkjdl";
    const actual = lineEncoding(inputTest);
    expect(actual).toBeDefined();
    expect(actual).toBe(expected);
  });
  it('test case #5 ', () => {
    const inputTest = "ccccccccccccccc";
    const expected = "15c";
    const actual = lineEncoding(inputTest);
    expect(actual).toBeDefined();
    expect(actual).toBe(expected);
  });
});