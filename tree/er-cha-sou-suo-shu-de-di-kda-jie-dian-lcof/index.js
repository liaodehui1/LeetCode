// 反向中序遍历
// var kthLargest = function(root, k) {
//   let arr = []
//   function worker(node) {
//     if (!node) return;
//     worker(node.right)
//     arr.push(node.val)
//     worker(node.left)
//   }
//   worker(root)
//   return arr[k - 1]
// };