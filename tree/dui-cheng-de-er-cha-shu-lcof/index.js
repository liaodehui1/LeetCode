// 递归(两端先序遍历)
var isSymmetric = function(root) {
  if (!root) return true
  function worker(lnode, rnode) {
    if(!lnode && !rnode) return true
    if(!lnode || !rnode) return false
    if (lnode.val !== rnode.val) return false
    return worker(lnode.left, rnode.right) && worker(lnode.right, rnode.left)
  }
  return worker(root.left, root.right)
};

// 队列
var isSymmetric = function(root) {
  if (!root) return true
  let queue = []
  queue.unshift(root.left)
  queue.push(root.right)
  while(queue.length) {
    // console.log(queue)
    let lnode = queue.shift()
    let rnode = queue.pop()
    if(!lnode && !rnode) continue // 都为null,非递归不直接返回
    if(!lnode || !rnode) return false
    if(lnode.val !== rnode.val) return false
    queue.unshift(lnode.left, lnode.right) // unshift后面的先插入
    queue.push(rnode.left, rnode.right)
  }
  return true
}