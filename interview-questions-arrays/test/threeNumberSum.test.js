const threeNumberSum = require('../challenges/threeNumberSum');


describe("Find a triplet that sum to a given value", () => {
  it('test case #1', () => {
    let input = [12, 3, 1, 2, -6, 5, -8, 6];
    let target = 0;
    let expected = [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]];
    expect(threeNumberSum(input, target)).toEqual(expected);
  });
  it('test case #2', () => {
    let input = [1, 2, 3];
    let target = 6;
    let expected = [[1, 2, 3]];
    expect(threeNumberSum(input, target)).toEqual(expected);
  });
  it('test case #3', () => {
    let input = [];
    let target = 7;
    let expected = [];
    expect(threeNumberSum(input, target)).toEqual(expected);
  });
  it('test case #4', () => {
    let input = [8, 10, -2, 49, 14];
    let target = 57;
    let expected = [[-2, 10, 49]];
    expect(threeNumberSum(input, target)).toEqual(expected);
  });
  it('test case #5', () => {
    let input = [12, 3, 1, 2, -6, 5, 0, -8, -1];
    let target = 0;
    let expected = [[-8, 3, 5], [-6, 1, 5], [-1, 0, 1]];
    expect(threeNumberSum(input, target)).toEqual(expected);
  });
  it('test case #5', () => {
    let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
    let target = 5;
    let expected = [];
    expect(threeNumberSum(input, target)).toEqual(expected);
  });
});