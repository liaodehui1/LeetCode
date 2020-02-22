// var kthSmallest = function(root, k) {
//   let res = []
//   function worker(node) {
//     if (!node) return;
//     worker(node.left)
//     res.push(node.val)
//     worker(node.right)
//   }
//   worker(root)
//   return res[k - 1]
// };


// var kthSmallest = function(root, k) {
//   let count = 0
//   function worker(node) {
//     if (!node) return;
//     let val1 = worker(node.left);
//     if (val1 || val1 === 0) return val1;
//     count++;
//     if (count === k) return node.val;
//     let val2 = worker(node.right);
//     if (val2 || val2 === 0) return val2;
//   }
//   return worker(root);
// };

var kthSmallest = function(root, k) {
  let ans, n = 0
  function worker(node) {
    if (!node) return;
    worker(node.left)
    n++;
    if (n === k) {
      ans = node.val
    }else if (n > k) { // 剪枝，不需要再遍历该节点子树
      return;
    }
    worker(node.right)
  }
  worker(root)
  return ans
}