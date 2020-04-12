// 后序遍历+剪枝
var isBalanced = function(root) {
  if (!root) return true
  function worker(root) {
    if(!root) return 0;
    let llevel = isBalanced(root.left) // 左子树深度
    if (llevel !== 0 && !llevel) return false;
    let rlevel = isBalanced(root.right) // 右子树深度
    if (rlevel !== 0 && !rlevel) return false;
    // 子树是否平衡(左右子树深度只差小于2)，平衡则返回该树深度，否则false
    return Math.abs(llevel - rlevel) <= 1 ? Math.max(llevel, rlevel) + 1 : false
  }
  return worker(root)
};

