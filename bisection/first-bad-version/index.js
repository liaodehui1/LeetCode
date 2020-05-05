var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 1, right = n
    while(left < right) {
      let mid = Math.floor((left + right ) / 2)
      if(isBadVersion(mid) === false) {
        left = mid + 1
      }else {
        right = mid
      }
    }
    return left
  };
};