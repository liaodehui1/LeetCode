function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var buildTree = function(inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;
  let rootVal = postorder[postorder.length - 1]
  let root = new TreeNode(rootVal)
  let i = inorder.findIndex(e => e === rootVal)
  root.left = buildTree(inorder.slice(0, i), postorder.slice(0, i))
  root.right = buildTree(inorder.slice(i + 1), postorder.slice(i, -1))
  return root
};