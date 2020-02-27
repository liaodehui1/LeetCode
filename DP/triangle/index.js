// 递归, 从上往下，再从下往上回溯
// 超时
// var minimumTotal = function(triangle) {
//   function minSum (x, y) {
//     if (x === triangle.length - 1) return triangle[x][y]
//     let left = triangle[x][y] + minSum(x + 1, y)
//     let right = triangle[x][y] + minSum(x + 1, y + 1)
//     return Math.min(left, right)
//   }
//   return minSum(0, 0)
// };

// 动态规划，从下往上
// dp[x][y] += Math.min(dp[x + 1][y], dp[x + 1][y + 1])
var minimumTotal = function(triangle) {
  let row = triangle.length
  let dp = new Array(row).fill(null)
  dp[row - 1] = triangle[row - 1]
  for(let x = row - 2; x >= 0; x--) {
    let cols = triangle[x].length
    dp[x] = triangle[x]
    for(let y = 0; y < cols; y++) {
      dp[x][y] += Math.min(dp[x + 1][y], dp[x + 1][y + 1])
    }
  }
  return dp[0][0]
}

console.log(minimumTotal(
  [
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
]
))