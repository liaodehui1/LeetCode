function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var minDepth = function(root) {
  if (!root) return 0;
  let lh = minDepth(root.left)
  let rh = minDepth(root.right)
  if (!root.left || !root.right) {
    return Math.max(lh, rh) + 1
  }else {
    return Math.min(lh, rh) + 1
  }
};