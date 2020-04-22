// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
//   insert(value) {
//     if (value < this.value) {
//       if (this.left === null) {
//         this.left = new BST(value);
//       } else {
//         this.left.insert(value);
//       }
//     } else {
//       if (this.right === null) {
//         this.right = new BST(value);
//       } else {
//         this.right.insert(value);
//       }
//     }
//     return this;
//   }
// }

// class BinaryTree{
//   constructor(value, parent = null){
//     this.value = value;
//     this.left = null;
//     this.right = null;
//     this.parent = parent;
//   }
//   insert(values, i=0){
//     if(i >= values.length) return;
//     const queue = [this];
//     while(queue.length > 0){
//       let current = queue.shift();
//       if(!current.left){
//         current.left = new BinaryTree(values[i], current);
//         break;
//       }
//       queue.push(current.left);
//       if(current.right === null){
//         current.right = new BinaryTree(values[i], current);
//         break;
//       }
//       queue.push(current.right);
//     }
//     this.insert(values, i+1);
//     return this;
//   }
// }

function isMAC48Address(inputString) {
  var validChars = "0123456789abcdef";

  input = trim(input.toLowerCase());

  var is48Bit = input.length === 17;
  var is64Bit = input.length === 23;

  if (!is48Bit && !is64Bit) return false;

  //determine the delimiter
  var delimiter = input.charAt(2);
  if (delimiter !== ":" && delimiter !== '-') return false;

  var pairs = input.split(delimiter);

  //check number of pairs
  if (is48Bit && pairs.length !== 6) return false;
  if (is64Bit && pairs.length !== 8) return false;

  for (var i = 0, psl = pairs.length, pair, j; i < psl; i++) {
    pair = pairs[i];

    //check if pair length is 2
    if (pair.length !== 2) return false;

    for (j = 0; j < pair.length; j++) {
      //check if a-f, 0-9
      if (validChars.indexOf(pair.charAt(j)) === -1) return false;
    }
  }

  return true;
}

//trim without regex
function trim(str) {
  str = str.toString();
  var begin = 0;
  var end = str.length - 1;
  while (begin <= end && str.charCodeAt(begin) < 33) { ++begin; }
  while (end > begin && str.charCodeAt(end) < 33) { --end; }
  return str.substr(begin, end - begin + 1);
}

let input = "00-1B-63-84-45-E6";
console.log(isMAC48Address(input));