// var gameOfLife = function(board) {
//   let m = board.length, n = board[0].length
//   let res = []
//   for(let i = 0; i < m; i++) {
//     for(let j = 0; j < n; j++) {
//       if(board[i][j] === 0 && change(i, j, 0)) { // 死细胞
//         res.push([i, j])
//       }
//       if(board[i][j] === 1 && change(i, j, 1)) { // 活细胞
//         res.push([i, j])
//       }
//     }
//   }
//   for(let [i, j] of res) {
//     board[i][j] = Number(!board[i][j])
//   }
//   return board
//   function change(i, j, status) {
//     let count = 0
//     let arr = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]]
//     for(let [offsetX, offsetY] of arr) {
//       if (i + offsetX >= 0 && i + offsetX < m && j + offsetY >= 0 && j + offsetY <= n) {
//         if (board[i + offsetX][j + offsetY] === 1) count++
//       }
//     }
//     // 死细胞 -> 活细胞 count = 3
//     // 活细胞 -> 活细胞 count = 2 || count = 3
//     return status === 0 ? count === 3 : (count !== 2 && count !== 3)
//   }
// }

// var gameOfLife = function(board) {
//   let m = board.length, n = board[0].length
//   for(let i = 0; i < m; i++) {
//     for(let j = 0; j < n; j++) {
//       if(board[i][j] === 0 && change(i, j, 0)) { // 死细胞
//         board[i][j] = 3 // 3表示原来是死细胞，将会变成活细胞
//       }
//       if(board[i][j] === 1 && change(i, j, 1)) { // 活细胞
//         board[i][j] = 2 // 2表示原来是活细胞，将会变成死细胞
//       }
//     }
//   }
//   for(let i = 0; i < m; i++) {
//     for(let j = 0; j < n; j++) {
//       if (board[i][j] === 3) board[i][j] = 1
//       if (board[i][j] === 2) board[i][j] = 0
//     }
//   }
//   return board
//   function change(i, j, status) {
//     let count = 0
//     let arr = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]]
//     for(let [offsetX, offsetY] of arr) {
//       if (i + offsetX >= 0 && i + offsetX < m && j + offsetY >= 0 && j + offsetY <= n) {
//         if (board[i + offsetX][j + offsetY] === 1 || board[i + offsetX][j + offsetY] === 2) count++
//       }
//     }
//     // 死细胞 -> 活细胞 count = 3
//     // 活细胞 -> 活细胞 count = 2 || count = 3
//     if (status === 0 && count === 3) return 3
//     if (status === 1 && (count !== 2 && count !== 3)) return 2
//   }
// }

// 拷贝模板
var gameOfLife = function(board) {
  let m = board.length, n = board[0].length
  let temp = board.map(item => [...item])
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(temp[i][j] === 0 && change(i, j, 0)) { // 死细胞
        board[i][j] = 1
      }
      if(temp[i][j] === 1 && change(i, j, 1)) { // 活细胞
        board[i][j] = 0
      }
    }
  }
  return board
  function change(i, j, status) {
    let count = 0
    let arr = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]]
    for(let [offsetX, offsetY] of arr) {
      if (i + offsetX >= 0 && i + offsetX < m && j + offsetY >= 0 && j + offsetY <= n) {
        if (temp[i + offsetX][j + offsetY] === 1) count++
      }
    }
    // 死细胞 -> 活细胞 count = 3
    // 活细胞 -> 活细胞 count = 2 || count = 3
    return status === 0 ? count === 3 : (count !== 2 && count !== 3)
  }
}

console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))