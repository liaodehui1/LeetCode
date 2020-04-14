// 递归
var hasPathSum = function(root, sum) {
  if(!root) return false
  let count = 0
  // 先序遍历
  function worker(node) {
    count += node.val
    if(!node.left && !node.right) { // 叶子节点
      if(sum === count) return true
    }
    if(node.left && worker(node.left)) return true
    if(node.right && worker(node.right)) return true
    count -= node.val
  }
  return worker(root) ? true : false
};

// 迭代
var hasPathSum = function(root, sum) {
  if(!root) return false
  // [节点，到达该节点所剩值]
  let node_stack = [[root, sum - root.val]]
  while(node_stack.length) {
    let [node, remain] = node_stack.pop()
    if(!node.left && !node.right && remain === 0) return true
    if(node.left) {
      node_stack.push([node.left, remain - node.left.val])
    }
    if(node.right) {
      node_stack.push([node.right, remain - node.right.val])
    }
  }
  return false
};