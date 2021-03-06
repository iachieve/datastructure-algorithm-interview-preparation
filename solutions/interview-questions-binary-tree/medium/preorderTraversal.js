// recursive solution

var preorderTraversal = function (root, result = []) {
  if (!root) return result = [];
  result.push(root.value);
  if (root.left) preorderTraversal(root.left, result);
  if (root.right) preorderTraversal(root.right, result);
  return result;
};


// iterative solution
var preorderTraversal = function (root, result = []) {
  if (!root) return [];
  let stack = [root];
  while (stack.length) {
    let curr = stack.pop();
    result.push(curr.value);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return result;
}

let input = [1, null, 2, 3];
let result =
  console.log(preorderTraversal(input));

module.exports = preorderTraversal;