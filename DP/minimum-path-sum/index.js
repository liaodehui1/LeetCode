var minPathSum = function(grid) {
  let row = grid.length
  let cols
  for(let i = 0; i < row; i++) {
    cols = grid[i].length
    for(let j = 0; j < cols; j++) {
      if ((i - 1 >= 0) && (j - 1 >= 0)) {
        grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j]
      }else if(i - 1 >= 0){
        grid[i][j] = grid[i - 1][j] + grid[i][j]
      }else if(j - 1 >= 0) {
        grid[i][j] = grid[i][j - 1] + grid[i][j]
      }else {
        grid[i][j] = grid[i][j]
      }
    }
  }
  console.log(grid)
  return grid[row - 1][cols - 1]
};

console.log(minPathSum(
  [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
))