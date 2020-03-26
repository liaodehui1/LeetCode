var numRookCaptures = function (board) {
  let len = board.length, x, y, flag = false, count = 0
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 'R') {
        x = i
        y = j
        flag = true
        break
      }
    }
    if (flag) break
  }
  function isTrue(x, y) {
    // console.log(x, y)
    if (board[x][y] === 'B') return true
    if (board[x][y] === 'p') {
      count++
      return true
    }
  }
  let i = x
  while (i > 0) {
    i--
    if (isTrue(i, y)) break
  }
  i = x
  while (i < len - 1) {
    i++
    if (isTrue(i, y)) break
  }
  let j = y
  while (j > 0) {
    j--
    if (isTrue(x, j)) break
  }
  j = y
  while (j < len - 1) {
    j++
    if (isTrue(x, j)) break
  }
  return count
};

console.log(numRookCaptures(
  [[".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "R", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."]]
))