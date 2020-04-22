/*
  source: https://app.codesignal.com/arcade/intro/level-11/vpfeqDwGZSzYNm2uX
  Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.
    Example
  For n = 152, the output should be
  deleteDigit(n) = 52;
  For n = 1001, the output should be
  deleteDigit(n) = 101.
  Input / Output
  [execution time limit]4 seconds(js)
  [input] integer n
  Guaranteed constraints:
  10 ≤ n ≤ 106.
  [output] integer
*/

function deleteDigit(n) {
  let potentials = [];
  let arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    potentials.push(Number(arr.slice(0, i).concat(arr.slice(i + 1)).join('')));
  }
  return Math.max.apply(Math, potentials);
}

module.exports = deleteDigit;