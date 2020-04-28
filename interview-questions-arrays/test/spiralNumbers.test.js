const spiralNumbers = require('../challenges/spiralNumbers');


describe("Find a triplet that sum to a given value", () => {
  it('test case #1', () => {
    let input = 3;
    let expected = [[1, 2, 3],[8, 9, 4],[7, 6, 5]];
    expect(spiralNumbers(input)).toEqual(expected);
  });
  it('test case #2', () => {
    let input = 5;
    let expected = [[1, 2, 3, 4, 5],[16, 17, 18, 19, 6],[15, 24, 25, 20, 7],[14, 23, 22, 21, 8], [13, 12, 11, 10, 9]];
    expect(spiralNumbers(input)).toEqual(expected);
  });
});