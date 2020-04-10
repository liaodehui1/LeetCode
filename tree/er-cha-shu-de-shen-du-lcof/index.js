// 递归回溯
var maxDepth = function(root) {
  if(!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// 队列
var maxDepth = function(root) {
  if(!root) return 0
  let queue = []
  queue.push([root, 1])
  let node, level
  while(queue.length){
    [node, level] = queue.shift()
    node.left && queue.push([node.left, level + 1])
    node.right && queue.push([node.right, level + 1])
  }
  return level // 最后一次level
};