var isSymmetric = function(root) {
  if (!root) return true;
  function worker(nodeLeft, nodeRight) {
    // 都为null
    if (!nodeLeft && !nodeRight) return true;
    // 一方为null
    if (!nodeLeft || !nodeRight) return false;
    const flag = nodeLeft.val === nodeRight.val
    return flag && worker(nodeLeft.left, nodeRight.right)
      && worker(nodeLeft.right, nodeRight.left)
  }
  return worker(root.left, root.right)
};