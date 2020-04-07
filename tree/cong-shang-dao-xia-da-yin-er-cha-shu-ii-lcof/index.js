// 队列(BFS)
var levelOrder = function(root) {
  if (!root) return []
  let queue = [], res = []
  queue.push([root, 0])
  while(queue.length) {
    let [node, level] = queue.shift()
    res[level] ? res[level].push(node.val) : res[level] = [node.val]
    node.left && queue.push([node.left, level + 1])
    node.right && queue.push([node.right, level + 1])
  }
  return res
};

// 深度优先遍历(DFS)
var levelOrder = function(root) {
  let res = []
  function worker(node, level) {
    if (!node) return;
    res[level] ? res[level].push(node.val) : res[level] = [node.val]
    worker(node.left, level + 1)
    worker(node.right, level + 1)
  }
  worker(root, 0)
  return res
}