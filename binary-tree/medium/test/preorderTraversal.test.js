const preorderTraversal = require('../challenges/preorderTraversal');
const  Tree = require('../../../data-structures/binary-search-tree');
let tree = new Tree();
tree.add(1).add(null).add(2).add(3);


// console.log('----',tree.preOrder())
// console.log('preorderTraversal', preorderTraversal(tree.root))

// console.log(preorderTraversal(bst));

describe('Testing PreOrder Traversal', () => {
  it('should traverse the tree', () => {
    let preOrder = tree.preOrder();
    expect(preorderTraversal(tree.root)).toEqual(preOrder);
  })
});
module.exports = preorderTraversal;