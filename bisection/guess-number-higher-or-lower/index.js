var guessNumber = function(n) {
  let left = 1, right = n
  while(left <= right) { // <= 等于时比较一次
    let mid = Math.floor((left + right) / 2)
    if(guess(mid) === -1) right = mid - 1 // pick更小
    if(guess(mid) === 1) left = mid + 1 // pick更大
    if(guess(mid) === 0) return mid
  }
};