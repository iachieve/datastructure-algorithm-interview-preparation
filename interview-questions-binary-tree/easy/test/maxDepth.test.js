const maxDepth = require('../challenges/maxDepth');
const Tree = require('../../../data-structures/binary-search-tree');
let tree = new Tree();
tree.add(3).add(9).add(20).add(null).add(null).add(15).add(7);
let md = tree.getDepth() + 1;

describe("should return the inorder traversal of its nodes' values", () => {
  it('should traverse the tree', () => {
    expect(maxDepth(tree.root)).toEqual(md);
  })
});