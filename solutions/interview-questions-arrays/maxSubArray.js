// So I was implementing a dynamic approach, and I 
// though it would be good practice to implement a the different
//  solutions that I could think of and analyze the Big O of each of them.

//   O(n²) Time - O(1) Space - Naive approach
// 320ms on my connection

var maxSubArray = function (nums) {
  let max = nums[0];

  for (let i = 0; i < nums.length; i += 1) {
    let currentMax = nums[i];
    for (let j = i + 1; j < nums.length; j += 1) {
      currentMax = Math.max(currentMax + nums[j], nums[j]);
      max = Math.max(currentMax, max);
    }
  }

  return max;
};

// What is going on here is that we check from the start of number at i, 
// and then add each sequential number at j.Each iteration will check to see
//  what the currentMax is, either nums[j] or nums[j] + currentMax, and them 
//  compare the max to the currentMax.This will run for every number and thus 
//  we have a time quadratic time complexity with a constant space complexity.
//  This is passing, however, there should be more tests that should get filter 
//  out this solution.O(n²) should be avoided if there is a better solution.

  // O(n) Time - O(n) Space - Dynamic Hashing
// 88ms on my connection
var maxSubArray = function (nums) {
  const hash = { 0: nums[0] }
  let max = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    hash[i] = Math.max(hash[i - 1] + nums[i], nums[i]);
    max = Math.max(hash[i], max);
  }

  return max;
};

// For this solution we are utilizing a hash to keep track of the max for 
// the previous number.What we calculate the maximum based on the previous
//  maximum and the current value.The KEY point here is that we are looking 
//  for the largest SEQUENTIAL max.

//   Example, take this array of four numbers:

// const nums = [1, -10, 5, 6];
// The maximum value that you can get from a subarray 
// from index 0 to 0(nums[0]) is the value itself.When 
// we look at the next value, the maximum value you can 
// get would either be the previous value plus the current
//  value or the current value itself.So what we do is create 
//  a hash to keep track of the maxes at each index:

// // Key : Value => index : max at that index
// const hash = {
//   0: 1 // nums[0] since there was no previous max
//   1: -9 // hash[0] + nums[1] > nums[1] => 1 + -10 > -10
//   2: 5 // hash[1] + nums[2] < nums[2] => -9 + 5 < 5
//   3: 11 // hash[2] + nums[3] > nums[3] => 5 + 6 > 6
// }
// This may seem strange since we are not technically checking at every single 
// possibility, but the pattern allows us to come to this solution.Whe have 
// a O(n) time solution with a O(n) space complexity.However, it is far faster
//  than the previous solution.We can, however, improve this even more to utilize
//   constant space.

//   O(n) Time - O(1) Space - No Hashing!
// 60ms on my connection
var maxSubArray = function (nums) {
  let currentMax = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    currentMax = Math.max(currentMax + nums[i], nums[i]);
    max = Math.max(currentMax, max);
  }

  return max;
};
// If you've noticed, we only needed to worry about the previous max value at 
// each index of the array, so we don't need to keep track of every max at each instance
//  for this function.By just storing the previous maximum for each element,
//   we can check the currentMax like we have been in the previous examples 
//   and set the max accordingly.This solution retain the O(n) time complexity, 
//   but removes the necessity for keeping track of every element we come acros