var pruneTree = function(root) {
  function worker(node) {
    if (!node) return null;
    let left = worker(node.left)
    if (!left) node.left = null;
    let right = worker(node.right)
    if (!right) node.right = null;
    if (left || right || node.val) {
      return true
    }else {
      return false
    }
  }
  worker(root)
  return root
};