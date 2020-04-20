const preorderTraversal = require('../challenges/preorderTraversal');
const  Tree = require('../../../data-structures/binary-search-tree');
let tree = new Tree();
tree.add(1).add(null).add(2).add(3);
let preOrder = tree.preOrder();

describe('Testing PreOrder Traversal', () => {
  it('should traverse the tree', () => {
    expect(preorderTraversal(tree.root)).toEqual(preOrder);
  })
});