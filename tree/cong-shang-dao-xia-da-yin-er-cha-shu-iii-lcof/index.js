// BFS
var levelOrder = function(root) {
  if (!root) return []
  let queue = [], res = [], count = 1
  queue.push([root, 1]) // 从1开始
  while(queue.length) {
    // console.log(queue)
    let [node, level] = queue.shift()
    if(res[level - 1]) {
      if (level & 1) { // 奇数层
        res[level - 1].push(node.val) // 后插入
      }else { // 偶数层
        res[level - 1].unshift(node.val) // 前插入
      }
    }else {
      res[level - 1] = [node.val]
    }
    node.left && queue.push([node.left, level + 1])
    node.right && queue.push([node.right, level + 1])
  }
  return res
};