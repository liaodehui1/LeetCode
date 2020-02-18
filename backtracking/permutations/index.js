/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function backtrack(nums, path, res) {
  if (path.length === nums.length) {
    // 数组 引用类型 pop操作最终会清空temp
    // 或者 [...path]
    res.push(path.slice(0)) 
    return;
  }
  let len = nums.length
  for(let i = 0; i < len; i++) {
    if (!path.includes(nums[i])) {
      path.push(nums[i])
      backtrack(nums, path, res)
      path.pop()
    }
  }
}

var permute = function(nums) {
  let res = []
  backtrack(nums, [], res)
  return res
};

console.log(permute([1,2,3]))