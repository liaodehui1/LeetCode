const CHAR = 'Q', EMPTY = '.'

function worker(res, n, row = 0, temp = []) {
  if (row === n) {
    // console.log(temp)
    let solution = []
    for(let k = 0; k < n; k++) {
      let arr = new Array(n).fill(EMPTY)
      arr[temp[k]] = CHAR
      solution.push(arr.join(''))
    }
    res.push(solution)
    return;
  }

  // i 当前所在列
  for(let i = 0; i < n; i++) {
    let flag = true, len = temp.length
    for(let j = 0; j < len; j++) {
      // j行 temp[j]列 
      if(
        (i === temp[j]) || // 处于相同列 
        (row - j === i - temp[j]) || // 处于 \ 对角线
        (row - j === -(i - temp[j])) // 处于 / 对角线
      ) {
        flag = false
        break
      }
    }
    if (flag) { // 可放置皇后
      temp.push(i)
      // 进入下一行
      worker(res, n, row + 1, temp)
      temp.pop()
    }
  }
}

var solveNQueens = function(n) {
 let res = []
 worker(res, n)
 return res
};

console.log(solveNQueens(4))