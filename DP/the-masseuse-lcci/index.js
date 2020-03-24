// 类似198. 打家劫舍

// 回溯：从终点往起点,再回溯到起点
// var massage = function(nums) {
//   function worker(i) {
//     if (i === 0) return nums[0]
//     if (i === 1) return Math.max(nums[0], nums[1])
//     return Math.max(worker(i - 1), worker(i - 2) + nums[i])
//   }
//   return worker(nums.length - 1)
// };

// 回溯：从终点往起点,再回溯到起点
// var massage = function(nums) {
//   if (nums.length === 0) return 0
//   let memory = new Array(nums.length).fill(-1)
//   function worker(i) {
//     if (i === 0) return nums[0]
//     if (i === 1) return Math.max(nums[0], nums[1])
//     if (memory[i] !== -1) return memory[i]
//     memory[i] = Math.max(worker(i - 1), worker(i - 2) + nums[i])
//     return memory[i]
//   }
//   return worker(nums.length - 1)
// };

// DP：直接从起点到终点
// var massage = function(nums) {
//   if (nums.length === 0) return 0
//   if (nums.length === 1) return nums[0]
//   let dp = new Array(nums.length)
//   dp[0] = nums[0]
//   dp[1] = Math.max(nums[0], nums[1])
//   for(let i = 2; i < nums.length; i++) {
//     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
//   }
//   return dp[nums.length - 1]
// }

// DP优化空间
var massage = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  let preMax = 0, curMax = 0
  for(let i = 0; i < nums.length; i++) {
    let temp = curMax
    curMax = Math.max(curMax, preMax + nums[i])
    preMax = temp
  }
  return curMax
}

console.log(massage([2,1,4,5,3,1,1,3]))