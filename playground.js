var countUnivalSubtrees = function (root) {
  if (!root) return 0;

  let count = 0;
  function isUniValueSubtree(node) {
    if (!node.left && !node.right) {
      count++;
      return true;
    }
    let isUnival = true;
    if (node.left)
      isUnival = isUniValueSubtree(node.left) && isUnival && node.left.val === node.val;

    if (node.right)
      isUnival = isUniValueSubtree(node.right) && isUnival && node.right.val === node.val;

    if (!isUnival) return false;
    count++;
    return true;
  }
  isUniValueSubtree(root);
  return count;
};