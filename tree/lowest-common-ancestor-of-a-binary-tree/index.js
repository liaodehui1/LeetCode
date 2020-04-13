// 递归
var lowestCommonAncestor = function(root, p, q) {
  let res = null
  function worker(node, p, q) {
    if(!node) return false;
    let mid = (node.val === p.val || node.val === q.val) ? 1 : 0
    let left = worker(node.left, p, q) ? 1 : 0
    let right = worker(node.right, p, q) ? 1 : 0
    if (mid + left + right >= 2) {
      res = node
      return;
    }
    if (mid + left + right > 0) return true; // => 1
  }
  worker(root, p, q)
  return res
};

// 父指针
var lowestCommonAncestor = function(root, p, q) {
  let map = new Map(), stack = [root]
  map.set(root, null)
  while(!map.has(p) || !map.has(q)) {
    let node = stack.pop()
    if(node.left) {
      map.set(node.left, node)
      stack.push(node.left)
    }
    if(node.right) {
      map.set(node.right, node)
      stack.push(node.right)
    }
  }
  let pp = [p], parent = p
  while(parent) {
    parent = map.get(parent)
    pp.push(parent)
  }
  parent = q
  while(!pp.includes(parent)) {
    parent = map.get(parent)
  }
  return parent
};