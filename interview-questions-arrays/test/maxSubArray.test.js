const maxSubArray = require('../challenges/maxSubArray');


describe("find the contiguous subarray which has the largest sum and return its sum", () => {
  it('test case #1', () => {
    let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    let expected = 6;
    expect(maxSubArray(input)).toEqual(expected);
  });
  it('test case #2', () => {
    let input = [-2, 2, 5, -11, 6];
    let expected = 7;
    expect(maxSubArray(input)).toEqual(expected);
  });

});