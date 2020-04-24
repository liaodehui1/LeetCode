// var reversePairs = function(nums) {
//   let res = 0
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//       if (nums[i] > nums[j]) res++
//     }
//   }
//   return res
// };

var reversePairs = function(nums) {
  if(nums.length === 0) return 0 
  let res = [0]
  mergeSort(nums, res)
  return res[0]
};

function mergeSort(arr, res) {
  if(arr.length === 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  let lleft = mergeSort(left, res)
  let rright = mergeSort(right, res)

  return merge(lleft, rright, res)
}

function merge(lleft, rright, result) {
  let res = [], i = 0, j = 0
  while(i < lleft.length && j < rright.length) {
    if(lleft[i] > rright[j]) { // 左侧更大
      res.push(rright[j])
      j++
    }else { // 左侧更小
      res.push(lleft[i]) // 入左侧
      i++
      // 比lleft[i]小的个数为res中lleft[i]前面的个数(减去已入的左侧个数，i表示)
      result[0] += (res.length - i)
    }
  }
  while(i < lleft.length) {
    res.push(lleft[i])
    i++
    result[0] += (res.length - i)
  }
  while(j < rright.length) {
    res.push(rright[j])
    j++
  }
  return res
}

console.log(reversePairs([5, 6, 7, 4, 5, 6]))