// 后序遍历
var mirrorTree = function(root) {
  if (!root) return root
  mirrorTree(root.left)
  mirrorTree(root.right)
  swap(root)
  return root
};

// 先序遍历
var mirrorTree = function(root) {
  if (!root) return root
  swap(root)
  mirrorTree(root.left)
  mirrorTree(root.right)
  return root
}

// 栈
var mirrorTree = function(root) {
  let stack = []
  stack.push(root)
  while(stack.length) {
    let node = stack.pop()
    if (!node) continue
    stack.push(node.left, node.right)
    let temp = node.left
    node.left = node.right
    node.right = temp
  }
  return root
}

function swap(root) {
  let temp = root.left
  root.left = root.right
  root.right = temp
}