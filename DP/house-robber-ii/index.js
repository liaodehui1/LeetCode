var rob = function(nums) {
  let len = nums.length
  if (!len) return 0;
  if(len === 1) return nums[0];
  function worker(start, end) {
    let curMax = 0
    let preMax = 0
    for(let i = start; i < end; i++) {
      let temp = curMax
      // curMax 为 i - 1处的值，preMax 为0 ~ i-2之间最大值，也就是在i-2处的最大值
      curMax = Math.max(curMax, nums[i] + preMax)
      preMax = temp
    }
    return curMax
  }
  // 不偷最后一家
  let val1 = worker(0, len - 1)
  // 不偷第一家
  let val2 = worker(1, len)
  return Math.max(val1, val2)
};

console.log(rob([2,1,1,2]))
console.log(rob([1,2,3,1]))
console.log(rob([2,7,9,3,1]))