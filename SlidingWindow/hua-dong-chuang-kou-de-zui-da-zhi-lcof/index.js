var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) return []
  let start = 0, end = k - 1, res = []
  for(;end < nums.length; end++, start++) {
    let max = -Infinity // Infinity表示无穷小 或Number.MIN_SAFE_INTEGER, 不要是Number.MIN_VALUE
    for(let i = start; i <= end; i ++) {
      if (nums[i] > max) max = nums[i]
    }
    res.push(max)
  }
  return res
};

console.log(Number.MIN_VALUE > -1)
console.log(Number.MIN_SAFE_INTEGER > -1)

console.log(maxSlidingWindow([1,-1], 1))