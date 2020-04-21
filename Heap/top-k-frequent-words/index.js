var topKFrequent = function(words, k) {
  let map = new Map()
  // 统计频率
  for(let word of words) {
    if(map.has(word)) {
      map.set(word, map.get(word) + 1)
    }else {
      map.set(word, 1)
    }
  }

  let arr = []
  for(let word of map) {
    arr.push(word)
  }
  let res = mergeSort(arr)
  return res.slice(0, k).map(item => item[0])
};

function mergeSort(arr) {
  if (arr.length === 1) return arr
  // 分
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  let lleft = mergeSort(left)
  let rright = mergeSort(right)

  // 合
  return merge(lleft, rright)
}

function merge(lleft, rright) {
  let res = [], i = 0, j = 0
  while(i < lleft.length && j < rright.length) {
    if(lleft[i][1] > rright[j][1]) { // 从大到小
      res.push(lleft[i])
      i++
    }else if(lleft[i][1] === rright[j][1]){ // 相等
      if(lleft[i][0] < rright[j][0]) { // 先入字典序小的
        res.push(lleft[i])
        i++
      }else {
        res.push(rright[j])
        j++
      }
      
    }else {
      res.push(rright[j])
      j++
    }
  }
  while(i < lleft.length) {
    res.push(lleft[i])
    i++
  }
  while(j < rright.length) {
    res.push(rright[j])
    j++
  }
  return res
}

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3))