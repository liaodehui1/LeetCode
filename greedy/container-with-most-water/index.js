// 暴力法，求出每个区间的值
// var maxArea = function(height) {
//   let max = -1
//   for(let i = 0; i < height.length; i++) {
//     for(let j = i + 1; j < height.length; j++) {
//       let area = Math.min(height[i], height[j]) * (j - i)
//       max = Math.max(max, area)
//     }
//   }
//   return max
// };

// 双指针
// 面积取决于短的，只有移动短的才有可能面积增大，移动长的面积会随着宽度减小
// var maxArea = function(height) {
//   let max = 0, i = 0, j = height.length - 1
//   while(i < j) {
//     max = Math.max(max, Math.min(height[i], height[j]) * (j - i))
//     if (height[i] > height[j]) j--
//     else i++
//   }
//   return max
// };

// 少判断一次
var maxArea = function(height) {
  let max = 0, i = 0, j = height.length - 1
  while(i < j) {
    let min = height[i] < height[j] ? height[i++] : height[j--]
    max = Math.max(max,  min * (j - i + 1)) // i--/j++ 宽度都提前减少了1
  }
  return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))