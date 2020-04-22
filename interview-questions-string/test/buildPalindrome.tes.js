const buildPalindrome = require('../challenges/buildPalindrome')

describe('testing buildPalindrome function', () => {
  it('test case #1 ', () => {
    const inputTest = "abcdc";
    const expected = "abcdcba";
    const actual = buildPalindrome(inputTest);
    expect(actual).toBeDefined();
    expect(actual).toBe(expected);
  });
  it('test case #1 ', () => {
    const inputTest = "ababab";
    const expected = "abababa";
    const actual = buildPalindrome(inputTest);
    expect(actual).toBeDefined();
    expect(actual).toBe(expected);
  });
  it('test case #1 ', () => {
    const inputTest = "abcba";
    const expected = "abcba";
    const actual = buildPalindrome(inputTest);
    expect(actual).toBeDefined();
    expect(actual).toBe(expected);
  });
  it('test case #1 ', () => {
    const inputTest = "cbdbedffcg";
    const expected = "cbdbedffcgcffdebdbc";
    const actual = buildPalindrome(inputTest);
    expect(actual).toBeDefined();
    expect(actual).toBe(expected);
  });
});