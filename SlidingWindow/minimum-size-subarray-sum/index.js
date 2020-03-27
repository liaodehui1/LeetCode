// 暴力优化
// var minSubArrayLen = function(s, nums) {
//   let len = nums.length, min = Infinity
//   let arr = new Array(len)
//   arr[0] = nums[0]
//   for(let i = 1; i < len; i ++) {
//     arr[i] = arr[i - 1] + nums[i]
//   }
//   for(let i = 0; i < len; i++) {
//     for(let j = i; j < len; j++) {
//       let sum = arr[j] - arr[i] + nums[i]
//       if (sum >= s) {
//         min = Math.min(min, (j - i + 1))
//       }
//     }
//   }
//   return min < Infinity ? min : 0
// }

// 滑动窗口 + 队列
// var minSubArrayLen = function(s, nums) {
//   if (nums.length === 0) return 0
//   let queue = [], min = Infinity, sum = 0
//   for(let i = 0; i < nums.length; i++) {
//     if (sum < s) { // 小于入队列
//       sum += nums[i]
//       queue.push(nums[i])
//     }
//     if (sum >= s) { // 大于出队列
//       min = Math.min(min, queue.length)
//       while(sum >= s) { // 出到小于s时
//         // 出最后一项时：
//         // 1.出了小于s则当前长度符合出了就不符合了 
//         // 2.出了大于等于，长度还可减1
//         // min = sum - queue[0] < s ? Math.min(min, queue.length) : Math.min(min, queue.length - 1)
//         sum -= queue.shift()
//       }
//       min = Math.min(min, queue.length + 1)
//     }
//   }
//   return min < Infinity ? min : 0
// };

// 滑动窗口 时间复杂度O(n)
var minSubArrayLen = function(s, nums) {
  if (nums.length === 0) return 0
  let min = Infinity, sum = 0, start = 0, end = 0
  for(; end < nums.length; end++) {
    if (sum < s) {
      sum += nums[end]
    }
    if (sum >= s) {
      min = Math.min(min, end - start + 1)
      while(sum >= s) { // 移动到小于s，中间不需要比较
        sum -= nums[start]
        start++
      }
      min = Math.min(min, end - start + 2)
    }
  }

  // 3 [1, 1]
  return min < Infinity ? min : 0
};

console.log(minSubArrayLen(11, [1,2,3,4,5]))
console.log(minSubArrayLen(7, [2,3,1,6]))
console.log(minSubArrayLen(3, [1, 1]))