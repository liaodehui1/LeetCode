// 暴力法
var maximalSquare = function(matrix) {
  if(!matrix.length || !matrix[0]) return 0;
  let maxSide = 0, rows = matrix.length, cols = matrix[0].length
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      // == 只进行值比较 ===全等比较
      if(matrix[i][j] == 1) { // 作为正方形左上角的1
        let curMaxSide = Math.min(rows - i, cols - j) // 可能最大的正方形边长
        let flag = false, k = 1
        for(; k < curMaxSide; k++) {
          if(matrix[i + k][j + k] == 1) { // 对角线上为1
            for(let m = 0; m < k; m++) {
              // 此时对角线上的点，往左和往上比较是否都为1
              // !'0' == false !'1' == false
              if(matrix[i + m][j + k] == '0' || matrix[i + k][j + m] == '0') {
                flag = true
                break // 有一个不为1
              }
            }
            if(flag) break // 退出，此时合适的最大的k的值应该为k - 1
          }else {
            break
          }
        }
        maxSide = Math.max(maxSide, k) // 边长为k = (k - 1) + 1
      }
    }
  }
  return maxSide * maxSide
};

// 动态规划
// dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
var maximalSquare = function(matrix) {
  if(!matrix.length || !matrix[0]) return 0;
  let maxSide = 0, rows = matrix.length, cols = matrix[0].length
  let dp = new Array(rows)
  for(let i = 0; i < rows; i++) {
    dp[i] = new Array(cols)
    for(let j = 0; j < cols; j++) {
      if(i == '0' || j == '0') {
        if(matrix[i][j] == '0') dp[i][j] = 0
        else dp[i][j] = 1
      }else {
        if(matrix[i][j] == '0') dp[i][j] = 0
        else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
      }
      maxSide = Math.max(maxSide, dp[i][j])
    }
  }
  return maxSide * maxSide
}