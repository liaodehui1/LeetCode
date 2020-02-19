function pre(root, arr = []) {
  if (!root) return;
  arr.push(root.val)
  pre(root.left, arr)
  pre(root.right, arr)
}

function backtrack(nums, path, res, target) {
  let sum = path.reduce((a, b) => a + b, 0)
  if (sum > target) return; 
  if (sum === target) {
    res.push(path.slice(0))
    return;
  }
  let len = nums.length
  for(let i = 0; i < len; i++) {
    path.push(nums[i])
    backtrack(nums, path, res, target)
    path.pop()
  }
}

var isSubStructure = function(A, B) {
  if (!A && !B) return true;
  if (!A || !B) return false;
  let arrA = [], arrB = []
  pre(A, arrA)
  pre(B, arrB)
  console.log(arrA)
  console.log(arrB)
  return arrA.length > arrB.length ? isSubStr(arrA, arrB) : false
};