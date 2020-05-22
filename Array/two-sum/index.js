// 暴力
function twoSum(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    let t = target - arr[i]
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] == t) return [i, j]
    }
  }
  return [-1, -1]
}


function twoSum(arr, target) {
  let o = {}
  for(let i = 0; i < arr.length; i++) {
    let item = o[target - arr[i]]
    if(item) return [item, i]
    else o[arr[i]] = i
  }
  return [-1, -1]
}