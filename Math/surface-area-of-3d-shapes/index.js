// 做减法
var surfaceArea = function(grid) {
  let n = grid.length, sum = 0
  for(let i = 0; i < n; i ++) {
    for(let j = 0; j < n; j ++) {
      if(grid[i][j] === 0) continue // 没有则跳过，否则自身重叠会变为sum+=
      sum += grid[i][j] * 6
      sum -= other(grid, i, j)
      sum -= (grid[i][j] - 1) * 2 // 自身重叠
    }
  }
  return sum
};
// 与其他重叠
// function other (grid, i, j) {
//   let count = 0, n = grid.length, arr = [[-1, 0], [0, 1], [1, 0], [0, -1]]
//   for(let [x, y] of arr) {
//     if (i + x >=0 && i + x < n && j + y >=0 && j + y < n)  {
//       count += Math.min(grid[i][j], grid[i + x][j + y])
//     }
//   }
//   return count
// }

// 优化，只看右边和下边
function other (grid, i, j) {
  let count = 0, n = grid.length, arr = [[0, 1], [1, 0]]
  for(let [x, y] of arr) {
    if (i + x < n && j + y < n)  {
      count += Math.min(grid[i][j], grid[i + x][j + y]) * 2
    }
  }
  return count
}

console.log(surfaceArea([[2]]))
console.log(surfaceArea([[1,0],[0,2]]))