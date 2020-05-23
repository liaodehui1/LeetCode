var canJump = function(nums) {
  let dp = new Array(nums.length).fill(false)
  dp[0] = true
  for(let i = 0; i < nums.length; i++) {
    // 能到达此处是前提
    if(dp[i]) {
      let t = 1
      // 可以到达的位置设为true，不要增加dp长度
      while(t <= nums[i] && i + t < dp.length) {
        dp[i + t] = true
        t += 1
      }
    }
  }
  console.log(dp)
  return dp[dp.length - 1]
};


var canJump = function(nums) {
  let max = nums[0]
  for(let i = 1; i < nums.length; i++) {
    // 当前位置为可到达位置
    if(i <= max) {
      max = Math.max(max, i + nums[i])
      if(max >= nums.length - 1) return true
    }
  }
  //[0]
  return max >= nums.length - 1
};