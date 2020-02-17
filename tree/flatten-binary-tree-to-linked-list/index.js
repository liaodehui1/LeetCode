var flatten = function(root) {
  if (!root) return;
  if (root.left) {
    let pre = root.left;
    while(pre.right) pre = pre.right;
    pre.right = root.right
    root.right = root.left
    root.left = null
  }
  flatten(root.right)
};