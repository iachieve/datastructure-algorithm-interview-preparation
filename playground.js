
// function sudoku(solution) {

//   function check(arr) {
//     return arr.sort()
//       .filter(function (val, index) {
//         return val === index + 1;
//       })
//       .length === 9;
//   }

//   function getSquare(solution, x, y) {
//     x *= 3;
//     y *= 3;
//     var square = [];
//     for (var i = x; i < x + 3; i++) {
//       for (var j = y; j < y + 3; j++) {
//         square.push(solution[i][j]);
//       }
//     }
//     return square;
//   }

//   for (let i = 0; i < 9; i++) {
//     const col = [];
//     const row = [];

//     for (var j = 0; j < 9; j++) {
//       col.push(solution[j][i]);
//       row.push(solution[i][j]);
//     }

//     if (!check(col) || !check(row)) return false;
//   }

//   for (let x = 0; x < 3; x++) {
//     for (let y = 0; y < 3; y++) {
//       if (!check(getSquare(solution, x, y))) return false
//     }
//   }

//   return true;
// }


function sudoku(solution) {

  function check(arr) {
    return arr.sort()
      .filter(function (val, index) {
        return val === index + 1;
      })
      .length === 9;
  }

  for (let i = 0; i < 9; i++) {
    var col = [];
    var row = [];
    var square = [];
    for (var j = 0; j < 9; j++) {
      col.push(solution[j][i]);
      row.push(solution[i][j]);
      square.push(solution[Math.floor(j / 3) + (i % 3) * 3][j % 3 + Math.floor(i / 3) * 3]);
    }
    if (!check(col) || !check(row) || !check(square)) return false;
  }
  return true;
}


let grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
[4, 6, 5, 8, 7, 9, 3, 2, 1],
[7, 9, 8, 2, 1, 3, 6, 5, 4],
[9, 2, 1, 4, 3, 5, 8, 7, 6],
[3, 5, 4, 7, 6, 8, 2, 1, 9],
[6, 8, 7, 1, 9, 2, 5, 4, 3],
[5, 7, 6, 9, 8, 1, 4, 3, 2],
[2, 4, 3, 6, 5, 7, 1, 9, 8],
[8, 1, 9, 3, 2, 4, 7, 6, 5]];


let res = sudoku(grid);
console.log(res);






// Write some function prodArray that takes in an array of 
// integers and returns an array such that each index in the 
// new array represents the product of all integers in the original 
// array except for the integer at that index.

// [1, 2, 3] => [6, 3, 2]
// [2, 5, 0] => [0, 0, 10]
// Let arr = axios.get(fsjfhad)
// //___________________

// Clarifying Questions(CQs):
// Always int ? No!
// Array ? Yes
// What happens when we don’t have a num ? Return dancing_banana.gif
// Long boi ? no!


// Pseudocode:
// Declare prodArray func
// Let new = [];
// If there are non integers in the array return dancing_banana.gif
// Find product of entire array
// Use two pointers to track what values to multiply vs the index to exclude
// Iterate over array.
// Dividing product by the current value.
// Update the new array[current index]with the division result
// Return new array

//___________________




