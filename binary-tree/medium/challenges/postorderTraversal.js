/*
Given a binary tree, return the postorder traversal of its nodes' values.
Example:
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
Follow up: Recursive solution is trivial, could you do it iteratively?

Definition for a binary tree node.
 function TreeNode(val) {
     this.value = value;
     this.left = this.right = null;
 }

*/

var postorderTraversal = function (root, result = [], stack = []) {
    if (!root) return result;
    postorderTraversal(root.left, result);
    postorderTraversal(root.right, result);
    result.push(root.value);
    return result;
}
module.exports = postorderTraversal