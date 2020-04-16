// 先序遍历
var pathSum = function(root, sum) {
  if(!root) return []
  let res = []
  function worker(node, temp) {
    temp.push(node.val) // 先序遍历
    if (!node.left && !node.right) { // 叶子节点
      if(temp.reduce((a, b) => a + b, 0) === sum) {
        res.push(temp.slice(0)) // 数组引用类型，不可直接push(temp)
      }
    }
    if(node.left) worker(node.left, temp)
    if(node.right) worker(node.right, temp)
    temp.pop() // 当前节点遍历完成
  }
  worker(root, [])
  return res
};

// 迭代
var pathSum = function(root, sum) {
  if(!root) return []
  let res = [], stack = [[root, sum - root.val]], map = new Map()
  map.set(root, null) // 记录当前节点的父节点
  while(stack.length) {
    let [node, sum] = stack.pop()
    if (!node.left && !node.right && sum === 0) { // 叶子节点且符合要求
      let path = findPath(map, node) // 从下往上查找路径
      res.push(path)
    }
    if(node.left) {
      stack.push([node.left, sum - node.left.val])
      map.set(node.left, node)
    }
    if(node.right) {
      stack.push([node.right, sum - node.right.val])
      map.set(node.right, node)
    }
  }
  return res
};

function findPath(map, node) {
  let res = [node.val]
  while(n = map.get(node)) {
    res.push(n.val)
    node = n
  }
  return res.reverse() // 顺序为从上到下
}

// 迭代
var pathSum = function(root, sum) {
  if(!root) return []
  // stack: 节点，节点剩余值，到当前节点的路径
  let res = [], stack = [[root, sum - root.val, [root.val]]]
  while(stack.length) {
    let [node, sum, temp] = stack.pop()
    if (!node.left && !node.right && sum === 0) { // 叶子节点且符合要求
      res.push(temp)
    }
    if(node.left) {
      // 每个节点都有自己的路径
      stack.push([node.left, sum - node.left.val, [...temp, node.left.val]])
    }
    if(node.right) {
      stack.push([node.right, sum - node.right.val, [...temp, node.right.val]])
    }
  }
  return res
};