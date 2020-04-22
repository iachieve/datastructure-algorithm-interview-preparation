var maxDepth = function (root) {
  if (!root) return 0;
  let leftSide = maxDepth(root.left) + 1;
  let rightSide = maxDepth(root.right) + 1;
  let result = Math.max(leftSide, rightSide);
  return result

};
module.exports = maxDepth;