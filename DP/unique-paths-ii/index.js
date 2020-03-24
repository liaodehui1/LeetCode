// var uniquePathsWithObstacles = function(obstacleGrid) {
//   if (obstacleGrid[0][0] === 1) return 0
//   let flag = false, row = obstacleGrid.length, col = obstacleGrid[0].length
//   for(let i = 0; i < row; i++) {
//     if (obstacleGrid[i][0] === 1) flag = true
//     if(flag) obstacleGrid[i][0] = 0
//     else obstacleGrid[i][0] = 1
//   }
//   flag = false
//   for(let i = 1; i < col; i++) {
//     if (obstacleGrid[0][i] === 1) flag = true
//     if(flag) obstacleGrid[0][i] = 0
//     else obstacleGrid[0][i] = 1
//   }
//   // console.log(obstacleGrid)
//   for(let i = 1; i < row; i++) {
//     for(let j = 1; j < col; j ++) {
//       if (obstacleGrid[i][j] === 1) obstacleGrid[i][j] = 0 // 该处为障碍物
//       else obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
//     }
//   }
//   return obstacleGrid[row - 1][col - 1]
// };

var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0
  let m = obstacleGrid[0].length, n = obstacleGrid.length, col = new Array(m), flag = false
  col[0] = 1
  for(let i = 1; i < m; i++) {
    if (obstacleGrid[0][i] === 1) flag = true
    if (flag) col[i] = 0
    else col[i] = 1
  }
  for(let i = 1; i < n; i++) { // 每次搬运一行
    for(let j = 0; j < m; j++) { // 每次计算一行
      if (obstacleGrid[i][j] === 1) { // 该处为障碍物，包括第一个
        col[j] = 0
      } else if (j > 0){ // 不为障碍物，且不是第一个
        col[j] = col[j] + col[j - 1]
      }
    }
  }
  return col[m - 1]
}

// [[0],[1]]
console.log(uniquePathsWithObstacles([
  [0,0,0],
  [0,1,0],
  [0,0,0]
]))