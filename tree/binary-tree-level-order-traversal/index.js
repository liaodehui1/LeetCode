// DFS
// var levelOrder = function(root) {
//   let res = []
//   function worker(node, level) {
//     if (!node) return;
//     let val = node.val
//     if (!res[level]) {
//       res[level] = [val]
//     }else {
//       res[level].push(val)
//     }
//     worker(node.left, level + 1)
//     worker(node.right, level + 1)
//   }
//   worker(root, 0)
//   return res
// };

// BFS
var levelOrder = function (root) {
  if (!root) return [];
  let res = [[root.val]], queue = [root]
  while (queue.length) {
    let len = queue.length // 记录该行有多少个节点
    let temp = []
    while (len > 0) {
      let currentNode = queue.shift()
      // console.log(currentNode.val)
      if (currentNode.left) {
        queue.push(currentNode.left)
        temp.push(currentNode.left.val)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
        temp.push(currentNode.right.val)
      }
      len -= 1
    }
    if (temp.length) {
      res.push(temp)
    }
  }
  return res
};