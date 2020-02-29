var findNumberOfLIS = function(nums) {
  let len = nums.length
  if (!nums || len === 0) return 0;
  let dp = new Array(len).fill(1), dpMax = Number.MIN_VALUE
  let combine = new Array(len).fill(1) // 组合
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if(dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          combine[i] = combine[j] // 继承前面组合数
        }else if (dp[j] + 1 === dp[i]) {
          combine[i] += combine[j] // 加上改位置组合数
        }
      }
    }
    dpMax = Math.max(dpMax, dp[i])
  }
  let res = 0
  for(let i = 0; i < len; i++) {
    if(dp[i] === dpMax) { // 寻找最大dp值的组合数之和
      res += combine[i]
    }
  }
  console.log(combine)
  return res
};

// console.log(findNumberOfLIS([1,2,4,3,5,4,7,2]))
console.log(findNumberOfLIS([1,3,5,4,7]))
console.log(findNumberOfLIS([2,2,2,2,2]))
// console.log(findNumberOfLIS([1,2,4,3,5,4,7,2]))