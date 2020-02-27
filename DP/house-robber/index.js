// var rob = function(nums) {
//   let len = nums.length
//   if (!len) return 0;
//   if(len === 1) return nums[0];
//   for(let i = 2; i < len; i++) {
//     let max = Number.MIN_VALUE
//     for(let j = 0; j < i - 1; j ++) {
//       max = Math.max(max, nums[i] + nums[j])
//     }
//     nums[i] = max
//   }
//   console.log(nums)
//   return Math.max(nums[len - 1], nums[len - 2])
// };

// var rob = function(nums) {
//   let len = nums.length
//   if (!len) return 0;
//   if(len === 1) return nums[0];
//   let max = nums[0]
//   for(let i = 2; i < len; i++) { // 每次往后走一家
//     max = Math.max(max, nums[i - 2]) // 每次将已确定的最大值和新出现的可用值比较
//     nums[i] += max
//   }
//   console.log(nums)
//   return Math.max(nums[len - 1], nums[len - 2])
// };

// f(n) = Math.max(f(n -1), f(n) + f(n -2))
// var rob = function(nums) {
//   let len = nums.length
//   if (!len) return 0;
//   if(len === 1) return nums[0];
//   let dp = new Array(len)
//   dp[0] = nums[0]
//   dp[1] = Math.max(nums[0], nums[1])
//   for(let i = 2; i < len; i++) {
//     // 走到第i家，能打劫到的最大值要么是i-1处的值，要么是i + (i- 2)的值
//     dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
//   }
//   console.log(dp)
//   return Math.max(dp[len - 1], dp[len - 2])
// };

// 优化空间复杂度
var rob = function(nums) {
  let len = nums.length
  if (!len) return 0;
  if(len === 1) return nums[0];
  let curMax = 0
  let preMax = 0
  for(let i = 0; i < len; i++) {
    let temp = curMax
    // curMax 为 i - 1处的值，preMax 为0 ~ i-2之间最大值，也就是在i-2处的最大值
    curMax = Math.max(curMax, nums[i] + preMax)
    preMax = temp
  }
  return curMax
};

console.log(rob([2,1,1,2]))
console.log(rob([1,2,3,1]))
console.log(rob([2,7,9,3,1]))