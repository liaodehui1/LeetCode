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