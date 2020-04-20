const postorderTraversal = require('../challenges/postorderTraversal');
const Tree = require('../../../data-structures/binary-search-tree');
let tree = new Tree();
tree.add(1).add(null).add(2).add(3);
let postOrder = tree.postOrder();

describe('Binary Tree postorder Traversal', () => {
  it("should return the postorder traversal of its nodes' values", () => {
    expect(postorderTraversal(tree.root)).toEqual(postOrder);
  })
});