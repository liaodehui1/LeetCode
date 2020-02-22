var mySqrt = function(x) {
  if(x < 2) return x;
  let left = 0, right = x- 1
  while(left <= right) {
    let mid = Math.floor((right - left) / 2) + left // left + 一半
    let res = mid * mid
    if (res > x) {
      right = mid - 1
    }else if (res < x) {
      left = mid + 1
    }else {
      return mid
    }
  }
  return left - 1 // right
};

console.log(mySqrt(4))