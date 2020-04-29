// 双递归
var pathSum = function(root, sum) {
  let res = [0]
  // 遍历所有节点，所有节点都做一次头节点
  function worker(node) {
    if(!node) return 0;
    search(node, sum, res)
    worker(node.left, sum)
    worker(node.right, sum)
  }
  worker(root)
  return res[0]
};

// 以每个节点为头节点开始搜索
function search(node, sum, res) {
  if(!node) return; // 走到最低端返回
  sum -= node.val
  if(sum === 0) res[0] += 1; // 中途为0，结果加1
  search(node.left, sum, res)
  search(node.right, sum, res)
}

// 前缀和：当前节点到根节点的和
var pathSum = function(root, sum) {
  let res = 0, prefixSum = [0] // 求的是0之后节点到curSum处的和
  function worker(node) {
    if(!node) return 0;
    let curSum = prefixSum[prefixSum.length - 1] + node.val
    let target = curSum - sum // 两节点之间的数(不包括target处节点，包含当前节点)之和等于sum
    for(let i = 0; i < prefixSum.length; i++) {
      if(prefixSum[i] === target) res++; // 因为有负数，可能有多个符合的target
    }
    prefixSum.push(curSum) // [1] 0
    worker(node.left, curSum)
    worker(node.right, curSum)
    prefixSum.pop() // 回溯
  }
  worker(root, 0)
  return res
};