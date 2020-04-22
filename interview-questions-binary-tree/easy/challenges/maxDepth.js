/*
source: https://leetcode.com/problems/maximum-depth-of-binary-tree/
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Note: A leaf is a node with no children.
Example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

Definition for a binary tree node.
 function TreeNode(val) {
     this.value = value;
     this.left = this.right = null;
 }

*/

var maxDepth = function (root) {
  if (!root) return 0;
  let leftSide = maxDepth(root.left) + 1;
  let rightSide = maxDepth(root.right) + 1;
  let result = Math.max(leftSide, rightSide);
  return result

};
module.exports = maxDepth;