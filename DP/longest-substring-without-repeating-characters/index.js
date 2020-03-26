// 自己实现 多重循环 空间复杂度O(1)
// var lengthOfLongestSubstring = function(s) {
//   let max = 0
//   for(let i = s.length - 1; i >= 0; i--) {
//     let index = i - 1, flag = false
//     for(let j = i - 1; j >= 0; j--) {
//       if (s.charAt(j) === s.charAt(i)) { // 从后往前的第一个相同位置
//         index = j
//         break
//       }
//       // if (s.charAt(j) === s.charAt(j - 1)) { // 只能判断相邻，无法判断"dvdf"
//       //   index = j
//       //   flag = true
//       //   break
//       // }
//       for(let k = j + 1; k < i; k++) { // 查找s[j]是否出现过
//         if (s.charAt(j) === s.charAt(k)) {
//           index = j + 1
//           flag = true
//           break
//         }
//       }
//       if (flag) break
//       index-- // 没有相同或已遍历中无重复的
//     }
//     let len = flag ? i - index + 1 : i - index // 非相同结束需要加1
//     max = Math.max(max, len)
//   }
//   return max
// };

// 滑动窗口, 队列 空间O(n)
// var lengthOfLongestSubstring = function(s) {
//   let queue = [], max = 0
//   for(let i = 0; i < s.length; i++) {
//     if (queue.includes(s[i])) { // 已存在
//       let index = queue.findIndex(item => item === s[i])
//       while(index >= 0) { // 之前的全部出队列
//         queue.shift()
//         index--
//       }
//     }
//     queue.push(s[i])
//     max = Math.max(max, queue.length)
//   }
//   return max
// };

// 滑动窗口 map 省去出队列操作
// var lengthOfLongestSubstring = function(s) {
//   // map存储，无重复：key->字符，value：index + 1
//   // end(i)：判断map中是否已存在 -> 不存在加入map;存在，更新start(max(start, map(s[end])))，再加入map(覆盖)
//   // 更新max
//   // end+1
//   let map = new Map(), start = 0, end = 0, max = 0
//   for(let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       start = Math.max(start, map.get(s[i])) // 跳到与当前重复的下一位置，舍去与当前重复位置之前的子串
//     }
//     map.set(s[i], i + 1) // 影响start，如果后面出现了与此位置相同的，则start需要跳到当前位置的后一个
//     max = Math.max(max, i - start + 1)
//     // end++ // i，每次走一步
//   }
//   return max
// };

// DP
// var lengthOfLongestSubstring = function(s) {
//   let dp = new Array(s.length + 1), max = 0, str = '', pre = 0
//   dp[0] = 0
//   for(let i = 0; i < s.length; i++) {
//     let index = str.lastIndexOf(s[i]) // 查找是否出现过
//     if (index === -1) { // 没有出现过
//       dp[i + 1] = dp[i] + 1
//     } else {
//       // console.log(index, pre, i)
//       // pre 记录上一个重复出现的字符位置
//       // 1. 与当前字符重复的字符位置大于之前已有重复的重复位置：aabb
//       // 2. 。。。小于。。。：baab
//       dp[i + 1] = index > pre ? i - index : i - pre
//       // zwnigfunjwz -> pre(n) > pre(w)
//       pre = pre > index ? pre : index // pre不能更小
//     }
//     // console.log(dp)
//     max = Math.max(max, dp[i + 1])
//     str += s[i]
//   }
//   return max
// };

// 舍去dp数组
var lengthOfLongestSubstring = function(s) {
  let max = 0, str = '', pre = 0, dp = 0
  for(let i = 0; i < s.length; i++) {
    let index = str.lastIndexOf(s[i]) // 查找是否出现过
    if (index === -1) { // 没有出现过
      dp += 1 //dp 走到此位置的dp
    } else {
      // console.log(index, pre, i)
      // pre 记录上一个重复出现的字符位置
      // 1. 与当前字符重复的字符位置大于之前已有重复的重复位置：aabb
      // 2. 。。。小于。。。：baab
      dp = index > pre ? i - index : i - pre
      // zwnigfunjwz -> pre(n) > pre(w)
      pre = pre > index ? pre : index // pre不能更小
    }
    // console.log(dp)
    max = Math.max(max, dp)
    str += s[i]
  }
  return max
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("baab"))
console.log(lengthOfLongestSubstring("dvdf"))
console.log(lengthOfLongestSubstring("zwnigfunjwz"))