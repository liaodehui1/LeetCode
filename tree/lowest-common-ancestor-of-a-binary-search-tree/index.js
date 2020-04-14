var lowestCommonAncestor = function(root, p, q) {
  let res = null
  let [min, max] = p.val < q.val ? [p.val, q.val] : [q.val, p.val]
  function worker(node) {
    if(node.val >= min && max >= node.val) { // 最近祖先
      return res = node
    // 二叉搜索树可以通过判断减少一边子树的查找
    }else if(node.val < min){ // 两个节点在左子树
      worker(node.right)
    }else if(node.val > min) { // 两个节点在右子树
      worker(node.left)
    }
  }
  worker(root)
  return res
};