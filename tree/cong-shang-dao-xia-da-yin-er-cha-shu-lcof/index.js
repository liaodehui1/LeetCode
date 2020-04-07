// 队列(广度优先遍历)
var levelOrder = function(root) {
  if (!root) return []
  let queue = [], res = []
  queue.push(root)
  while(queue.length) {
    let node = queue.shift()
    res.push(node.val)
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
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
  return res.reduce((pre, cur) => {
    return pre.concat(cur)
  }, [])
}