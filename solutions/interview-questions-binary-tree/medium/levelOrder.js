var levelOrder = function (root, res = [], lvl = -1) {
  if (root) {
    lvl++;
    if (!res[lvl]) {
      res.push([root.value]);
    } else {
      res[lvl].push(root.value);
    }
    levelOrder(root.left, res, lvl);
    levelOrder(root.right, res, lvl);
  }
  return res;
};

module.exports = levelOrder;