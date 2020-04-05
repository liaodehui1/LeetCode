// map
// var majorityElement = function(nums) {
//   let map = new Map()
//   for(let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i]) + 1)
//     }else {
//       map.set(nums[i], 1)
//     }
//   }
//   let res = nums[0]
//   map.forEach((val, key) => {
//     if (val > map.get(res)) res = key
//   })
//   return res
// }

// sort
// var majorityElement = function(nums) {
//   nums.sort()
//   return nums[Math.floor(nums.length / 2)]
// }

// 摩尔投票法
// var majorityElement = function(nums) {
//   let candidate, count = 0
//   for(let i = 0; i < nums.length; i++) {
//     if (count === 0) {
//       candidate = nums[i] // 变更候选人
//     }
//     if (nums[i] === candidate) {
//       count++
//     }else {
//       count-- // 抵消
//     }
//   }
//   return candidate
// };

// 位运算
var majorityElement = function(nums) {
  let ans = 0, len = nums.length
  for(let i = 0; i < 32; i++) { // 32位
    let p = 1 << i, count = 0
    for(let num of nums) {
      if (num & p) {
        count++ // 1的个数
      }
    }
    if (count > len / 2) {
      ans ^= p // 不同则会1
    }
  }
  return ans
}

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]))