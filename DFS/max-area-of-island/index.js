// 深度优先遍历
// var maxAreaOfIsland = function(grid) {
//   let res = 0, m = grid[0].length, n = grid.length
//   for(let i = 0; i < n; i++) {
//     for(let j = 0; j < m; j++) {
//       if (grid[i][j] === 1) {
//         res = Math.max(res, dfs(i, j))
//       }
//     }
//   }
//   function dfs (x, y) {
//     if (x < 0 || y < 0 || x >=n || y >= m || grid[x][y] === 0) {
//       return 0
//     }
//     grid[x][y] = 0 // 遍历过的设为0，防止无限循环， 设为0不会影响后面的，因为后面计算的话也和前面计算的一样
//     return dfs(x - 1, y) + dfs(x, y + 1) + dfs(x + 1, y) + dfs(x, y - 1) + 1 // 上右下左+自身
//   }
//   return res
// };

// 深度优先遍历 + 栈
// var maxAreaOfIsland = function(grid) {
//   let res = 0, m = grid[0].length, n = grid.length, stack = []
//   for(let i = 0; i < n; i++) {
//     for(let j = 0; j < m; j++) {
//       let cur = 0
//       if (grid[i][j] === 1) {
//         stack.push([i, j])
//         grid[i][j] = 0 // 提前置为0
//         while(stack.length) {
//           // console.log(stack)
//           let [r, c] = stack.pop()
//           cur++
//           if (r - 1 >= 0 && grid[r - 1][c] === 1) {
//             stack.push([r - 1, c]) 
//             grid[r- 1][c] = 0
//           }
//           if (c + 1 < m && grid[r][c + 1] === 1) {
//             stack.push([r, c + 1])
//             grid[r][c + 1] = 0
//           }
//           if (r + 1 < n && grid[r + 1][c] === 1) {
//             stack.push([r + 1, c])
//             grid[r + 1][c] = 0
//           }
//           if (c - 1 >= 0 && grid[r][c - 1] === 1) {
//             stack.push([r, c - 1]) 
//             grid[r][c - 1] = 0
//           }
//         }
//         // console.log(cur)
//         res = Math.max(res, cur)
//       }
//     }
//   }
//   return res
// };

// 广度优先遍历(队列)
var maxAreaOfIsland = function(grid) {
  let res = 0, m = grid[0].length, n = grid.length, queue = []
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      let cur = 0
      if (grid[i][j] === 1) {
        queue.push([i, j])
        grid[i][j] = 0 // 提前置为0
        while(queue.length) {
          // console.log(queue)
          let [r, c] = queue.shift()
          cur++
          if (r - 1 >= 0 && grid[r - 1][c] === 1) {
            queue.push([r - 1, c]) 
            grid[r- 1][c] = 0
          }
          if (c + 1 < m && grid[r][c + 1] === 1) {
            queue.push([r, c + 1])
            grid[r][c + 1] = 0
          }
          if (r + 1 < n && grid[r + 1][c] === 1) {
            queue.push([r + 1, c])
            grid[r + 1][c] = 0
          }
          if (c - 1 >= 0 && grid[r][c - 1] === 1) {
            queue.push([r, c - 1]) 
            grid[r][c - 1] = 0
          }
        }
        // console.log(cur)
        res = Math.max(res, cur)
      }
    }
  }
  return res
};

console.log(maxAreaOfIsland([
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]
]))
console.log(maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]))