var spiralOrder = function(matrix) {
  let res = []
  let rows = matrix.length, cols = matrix[0] ? matrix[0].length : 0
  // time:外围
  let i = 0, j = 0, time = 0, len = rows * cols
  cols && res.push(matrix[0][0]) // 为了使用++j
  while(res.length < len) {
    // 往右
    while(++j < cols - time) {
      res.push(matrix[i][j])
    }
    j--;
    if(isEqual(res, len)) break

    // 往下
    while(++i < rows - time) {
      res.push(matrix[i][j])
    }
    i--;
    if(isEqual(res, len)) break

    // 往左
    while(--j >= time) {
      res.push(matrix[i][j])
    }
    j++;
    if(isEqual(res, len)) break

    // 往上
    // 往上的时候，上、右、下外围加1
    time += 1
    while(--i >= time) {
      res.push(matrix[i][j])
    }
    i++;
  }
  return res
};

// 判断是否遍历完
function isEqual(res, len) {
  return res.length === len
}

var spiralOrder = function(matrix) {
  let res = []
  // t、r、b、l：上右下左边界值
  let t = 0, r = matrix[0] ? matrix[0].length - 1 : 0, b = matrix.length - 1, l = 0
  if(!matrix.length || !matrix[0]) return res // []
  while(true) {
    // 往右
    for(let j = l; j <= r;  j++) {
      res.push(matrix[t][j])
    }
    t++;
    if(t > b) break

    // 往下
    for(let i = t; i <= b; i++) {
      res.push(matrix[i][r])
    }
    r--;
    if(r < l) break

    // 往左
    for(let j = r; j >= l; j--) {
      res.push(matrix[b][j])
    }
    b--;
    if(b < t) break

    // 往上
    for(let i = b; i >= t; i--) {
      res.push(matrix[i][l])
    }
    l++;
    if(l > r) break
  }
  return res
}