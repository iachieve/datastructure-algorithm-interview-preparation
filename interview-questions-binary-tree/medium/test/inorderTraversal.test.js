const inorderTraversal = require('../challenges/inorderTraversal');
const Tree = require('../../../data-structures/binary-search-tree');
let tree = new Tree();
tree.add(1).add(null).add(2).add(3);
let inOrder = tree.inOrder();

describe("should return the inorder traversal of its nodes' values", () => {
  it('should traverse the tree', () => {
    expect(inorderTraversal(tree.root)).toEqual(inOrder);
  })
});