function backtrack (nums, list, templist = [], start = 0) {
  list.push(templist.slice(0))
  let len = nums.length
  for(let i = start; i < len; i++) { // i = start 去重
    let num = nums[i]
    templist.push(num)
    backtrack(nums, list, templist, i + 1)
    templist.pop()
  }
}
var subsets = function(nums) {
  let list = []
  backtrack(nums, list)
  return list
};