// var searchRange = function(nums, target) {
//  let left = 0, right = nums.length - 1
//  while(left <= right) {
//    let mid = Math.floor((right - left) / 2) + left
//    if (nums[mid] < target) {
//      left = mid + 1
//    }else if (nums[mid] > target) {
//      right = mid - 1
//    }else {
//      let first = mid, last = mid
//      while(nums[first - 1] === target) first--;
//      while(nums[last + 1] === target) last++;
//      return [first, last]
//    }
//  }
//  return [-1, -1]
// };

var firstPosition  = (nums, target) =>{
  let left = 0, right = nums.length - 1
  while(left < right) { // left == rgiht
    let mid = Math.floor((right - left) / 2) + left // floor 向下取整，倾向left
    if (nums[mid] < target) {
      left = mid + 1
    }else {
      right = mid
    }
  }
  if (nums[left] !== target) {
    return -1
  }
  return left
}

var lastPosition  = (nums, target) =>{
  let left = 0, right = nums.length - 1
  while(left < right) { // left == rgiht
    let mid = Math.ceil((right - left) / 2) + left // ceil 向上取整，倾向right
    if (nums[mid] > target) {
      right = mid - 1
    }else {
      left = mid
    }
  }
  if (nums[right] !== target) {
    return -1
  }
  return right
}

var searchRange = function(nums, target) {
  let first = firstPosition(nums, target)
  let last = lastPosition(nums, target)
  return [first, last]
}

console.log(searchRange([5,7,7,8,8,10], 8))