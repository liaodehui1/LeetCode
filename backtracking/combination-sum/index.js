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

var combinationSum = function(candidates, target) {
  let res = []
  backtrack(candidates, [], res, target)
  return res
};