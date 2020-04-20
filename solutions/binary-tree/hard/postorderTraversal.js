// iterative solution

var postorderTraversal = function (root, result = [], stack = []) {
  if (!root) return [];
  stack = [root];
  while (stack.length) {
    let curr = stack.pop();
    result.unshift(curr.value);
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return result
}


// recursive solution

var postorderTraversal = function(root, result = []) {
    if(!root) return result;
    postorderTraversal(root.left, result);
    postorderTraversal(root.right, result);
    result.push(root.value);
    return result;
};