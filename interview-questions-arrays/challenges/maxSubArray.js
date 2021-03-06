/*

source: https://leetcode.com/problems/maximum-subarray/
testCommand: 
Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum and return its sum.
Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

var maxSubArray = function (nums) {
  let currentMax = nums[0];
  let max = nums[0];
  let test = []
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(currentMax + nums[i], nums[i]);
    test.push(currentMax);
    max = Math.max(currentMax, max);
  }
  console.log(test);
  return max;
};

let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let result = maxSubArray(input);



module.exports = maxSubArray;