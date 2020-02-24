// 超时
// var uniquePaths = function(m, n) {
//   function step(x, y) {
//     // 只能往下或往右走，第一行和第一列只有一种走法
//     if (x === 0 || y === 0) return 1;
//     return step(x - 1, y) + step(x, y - 1);
//   }
//   return step(n - 1, m - 1);
// }

// var uniquePaths = function(m, n) {
//   let dp = new Array(n)
//   for(let x = 0; x < n; x++) {
//     dp[x] = []
//     for(let y = 0; y < m; y++) {
//       if (x === 0 || y === 0) {
//         dp[x][y] = 1
//       }else {
//         dp[x][y] = dp[x - 1][y] + dp[x][y - 1] 
//       }
//     }
//   }
//   return dp[n - 1][m -1]
// }

// 优化
var uniquePaths = function(m, n) {
  let col = new Array(m).fill(1)
  for(let i = 1; i < n; i++) { // 每次搬运一行
    for(let j = 1; j < m; j++) { // 每次计算一行
      // 1 1 1
      // 1 2 3
      col[j] = col[j] + col[j - 1]
    }
  }
  return col[m - 1]
}

console.log(uniquePaths(3, 2))