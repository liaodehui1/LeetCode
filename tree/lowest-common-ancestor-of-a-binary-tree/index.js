var lowestCommonAncestor = function(root, p, q) {
  let res = null
  function worker(node, p, q) {
    if(!node) return false;
    let mid = (node.val === p.val || node.val === q.val) ? 1 : 0
    let left = worker(node.left, p, q) ? 1 : 0
    let right = worker(node.right, p, q) ? 1 : 0
    if (mid + left + right >= 2) {
      res = node
      return;
    }
    if (mid + left + right > 0) return true; // => 1
  }
  worker(root, p, q)
  return res
};