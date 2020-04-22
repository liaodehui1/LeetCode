var rightSideView = function(root) {
  if(!root) return [];
  // 计算左右子树高度
  let llevel = computeLevel(root.left) + 1
  let rlevel = computeLevel(root.right) + 1
  
  let res = []
  res.push(root.val)
  woker(root.right, res, 2)
  // 还需遍历左子树大于右子树高度部分
  if(llevel > rlevel) {
    // 走左子树，第二层
    woker(root.left, res, 2)
  }
  return res
};

function computeLevel(node) {
  if(!node) return 0;
  return Math.max(computeLevel(node.left), computeLevel(node.right)) + 1
}

function woker(node, res, level) {
  if(!node) return;
  if(level > res.length) { // 大于已遍历层数
    res.push(node.val)
  }
  if(node.right) { // 优先看右子树
    woker(node.right, res, level + 1)
  }
  // 这不是看完右子树就行，可能该节点左子树还大于右子树
  woker(node.left, res, level + 1)
}