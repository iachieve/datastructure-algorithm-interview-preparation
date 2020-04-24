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


function digitsProduct(product){
  function digitProduct(num){
    let prod = 1
    while(num){
      prod *= num % 10;
      num = Math.floor(num / 10);
    }
    return prod;
  }
  return digitProduct(product);
}
console.log(digitsProduct(152))