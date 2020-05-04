// 双重循环
// var findRepeatNumber = function(nums) {
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//       if(nums[i] === nums[j]) return nums[i]
//     }
//   }
// };

// map / set判断size
// var findRepeatNumber = function(nums) {
//   let map = new Map()
//   for(let i = 0; i < nums.length; i++) {
//     if(map.has(nums[i])) return nums[i]
//     map.set(nums[i], 1)
//   }
// };

// 0-n-1，不重复的话第i个位置数为i
var findRepeatNumber = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === i) continue // 正好在应该在的位置上
    if(nums[i] !== i && nums[nums[i]] !== nums[i]) { // 应该放到正确的位置，且正确的位置上也是错误的数
      swap(nums, i, nums[i])
      i--
      continue
    }
    return nums[i] // 应该放到正确的位置，但正确的位置上已经是正确的数(重复)
  }
};
function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]]
}