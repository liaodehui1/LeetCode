// var binaryTreePaths = function(root) {
//   let res = []
//   function worker(node, path) {
//     if (!node) return;
//     path.push(node.val)
//     worker(node.left, path)
//     worker(node.right, path)
//     if (!node.left && !node.right) { // 叶子节点
//       res.push(path.join('->'))
//     }
//     path.pop()
//   }
//   worker(root, []) // 数组 引用类型 回溯时数组应该回到当前状态
//   return res
// };

var binaryTreePaths = function(root) {
  let res = []
  function worker(node, path) {
    if (!node) return;
    path.push(node.val)
    worker(node.left, path.slice(0))
    worker(node.right, path.slice(0))
    if (!node.left && !node.right) { // 叶子节点
      res.push(path.join('->'))
    }
  }
  worker(root, []) // 数组 引用类型 回溯时数组应该回到当前状态
  return res
};