const inorderTraversal = require('../challenges/inorderTraversal');
const Tree = require('../../../data-structures/binary-search-tree');

let tree = new Tree();

tree.add(1).add(null).add(2).add(3);

console.log(' ===>>>>', inorderTraversal(tree.root))

describe('Binary Tree Inorder Traversal', () => {
  it('should traverse the tree', () => {
    let inOrder = tree.inOrder();
    expect(inorderTraversal(tree.root)).toEqual(inOrder);
  })
});