function inorderTraversal(curr, result = [], stack = []) {
  if (!curr) return [];
  while (stack.length || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      result.push(curr.value);
      curr = curr.right;
    }
  }
  return result;
}
