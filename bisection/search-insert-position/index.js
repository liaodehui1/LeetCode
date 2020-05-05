var searchInsert = function(nums, target) {
  let left =0, right = nums.length - 1
  while(left <= right) { // <= 等于时也要比较一次
    let mid = Math.floor((left + right) / 2)
    if(nums[mid] === target) return mid
    else if(nums[mid] < target) left = mid + 1
    else right = mid - 1
  }
  return left // rihgt < left退出，此时left位置适合放置target
};