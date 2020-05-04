var findNumberIn2DArray = function(matrix, target) {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === target) return true
      if(matrix[i][j] > target) break // 后面的都是大于的数
    }
  }
  return false
};


var findNumberIn2DArray = function(matrix, target) {
  if(matrix.length === 0) return false // [] 0
  let rows = matrix.length, cols = matrix[0].length
  for(let i = 0; i < rows; i++) {
    if(target >= matrix[i][0] && matrix[i][cols - 1] >= target) { // 此区间可能存在
      if (binarySearch(matrix[i], 0, cols - 1, target)) return true
    }
  }
  return false
};

// 二分搜索
function binarySearch(nums, s, e, target) {
  if(s === e && nums[s] !== target) return false // [[-5]] -5
  let mid = Math.floor((s + e) / 2)
  if(nums[mid] === target) return true
  else if (nums[mid] > target) return binarySearch(nums, s, mid, target)
  else return binarySearch(nums, mid + 1, e, target)
}

// 二叉搜索树思想：左边所有数(左子树)小于当前数(节点)，下面所有数(右子树)大于当前数(节点)
var findNumberIn2DArray = function(matrix, target) {
  if(matrix.length === 0) return false
  let i = 0, j = matrix[0].length - 1
  while(i < matrix.length && j >= 0) {
    if(matrix[i][j] === target) return true
    if(matrix[i][j] > target) j--
    if(matrix[i][j] < target) i++
  }
  return false
};