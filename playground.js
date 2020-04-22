class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }
}

class BinaryTree{
  constructor(value, parent = null){
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }
  insert(values, i=0){
    if(i >= values.length) return;
    const queue = [this];
    while(queue.length > 0){
      let current = queue.shift();
      if(!current.left){
        current.left = new BinaryTree(values[i], current);
        break;
      }
      queue.push(current.left);
      if(current.right === null){
        current.right = new BinaryTree(values[i], current);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i+1);
    return this;
  }
}

const test1 = new BinaryTree(1).insert([5, 1, 5, 5, 5, null, 5])
var countUnivalSubtrees = function (root) {
  if (root == null) return 0;
  let result = 0;
  const test = (node, expected) => {
    if (node == null) return true;
    const isUni = (test(node.left, node.val) & test(node.right, node.val));
    if (isUni) result++;
    return isUni && node.val === expected;
  }
  test(root, root.val);
  return result;
};

console.log(countUnivalSubtrees(test1));