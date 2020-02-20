var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) return null;
  if (t1 && !t2) return t1;
  if (!t1 && t2) return t2;
  let nodeVal = t1.val + t2.val
  let node = new TreeNode(nodeVal)
  node.left = mergeTrees(t1.left, t2.left)
  node.right = mergeTrees(t1.right, t2.right)
  return node
};