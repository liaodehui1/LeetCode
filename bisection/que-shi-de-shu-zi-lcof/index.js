// 从前往后遍历
var missingNumber = function(nums) {
  // 0 - n-1: n个数 -> 减掉一个数，剩下n-1个数，找出减掉的那个数
  for(let i = 0; i < nums.length + 1; i++) {
    // i === nums.length 减掉的是最后一个数
    if(i === nums.length || nums[i] !== i) return i
  }
};

// 二分法
var missingNumber = function(nums) {
  let left = 0, right = nums.length
  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    if(nums[mid] === mid) left = mid + 1 // [0] nums[mid] == undefined !== mid
    else right = mid - 1
  }
  return left
};