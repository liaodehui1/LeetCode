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

// 迭代
var kthLargest = function(root, k) {
  let count = 1,stack = []
  let cur = root
  while(cur || stack.length) {
    while(cur) {
      stack.push(cur)
      cur = cur.right
    }
    // let cur = stack.pop() // 报错：cur is not defined，因为未初始化就调用
    cur = stack.pop()
    if (count++ === k) {
      return cur.val
    }
    cur = cur.left
  }
}