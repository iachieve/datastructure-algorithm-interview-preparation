/*

test command: 
jest interview-questions-recursion/test/productSum.test.js --watch

  write a function that takes in a 'special' array and return its product sum
  A 'special array' is non-empty array that contains either integers or other 'special' arrays
  The product sum of a 'special' array is the sum of its elements, where 'special arrays
  inside it are summed themselves and then multiplied by their level of depth
  for example,
  the product sum of [x, y] is x + y;
  the product sum of [x, [y, z]] is x + 2y + 2z

  sample input: array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
  sample output: 12
  calculated as 5 + 2 + 2 * (7-1) + 3 * (6 + 3 * (-13 + 8) + 4)
  
*/

function productSum(array, multiplier = 1) {

}

module.exports = productSum;