var topKFrequent = function(nums, k) {
  let map = new Map()
  // 遍历收集频率
  for(let num of nums) {
    if(map.has(num)) {
      map.set(num, map.get(num) + 1)
    }else {
      map.set(num, 1)
    }
  }
  let res = []
  map.forEach((val, key) => {
    if(res.length < k) { // 取K个
      res.push(key)
      return
    }
    // 遍历剩余
    if(res.length === k) res.sort((a, b) => map.get(a) - map.get(b) < 0)
    if(val > map.get(res[0])) { // 大于第一个(k个中最小的)
      res[0] = key
      swap(res)
    }
    // console.log(res)
  })
  return res
};

function swap(arr) {
  let index = 0, i = 1
  for(; i < arr.length; i++) {
    if(arr[i] > arr[0]) {
      index = i - 1
      break
    }
  }
  if(i === arr.length) index = arr.length - 1;
  [arr[0], arr[index]] = [arr[index], arr[0]]
}

console.log(topKFrequent([1,1,1,2,2,3], 2))