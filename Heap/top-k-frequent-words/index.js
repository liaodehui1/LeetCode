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

  // let arr = []
  // for(let word of map) {
  //   arr.push(word)
  // }
  // let res = mergeSort(arr)
  // return res.slice(0, k).map(item => item[0])

  let arr = [], count = 0
  for(let word of map) {
    count++
    if(arr.length < k) {
      arr.push(word)
    }
    // 建一个k大小的堆
    if(arr.length === k) heapSort(arr)
     // 遍历后面的
    if(count > k) {
      if(word[1] > arr[0][1] || (word[1] === arr[0][1] && word[0] < arr[0][0])) {
        arr[0] = word
        heapSort(arr)
      }
    }
  }
  return arr.map(item => item[0]).reverse()
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

function heapSort(arr) {
  for(let i = Math.floor(arr.length / 2 - 1); i >=0; i--) {
    build(arr, i, arr.length - 1)
  }
  for(let i = arr.length - 1; i > 0; i--) {
    // 大的在后面
    swap(arr, 0, i)
    // console.log('---', arr)
    build(arr, 0, i - 1)
    // console.log('+++', arr)
  }
}

function build(arr, i, len) {
  for(let j = 2 * i + 1; j <= len; j = 2 * i + 1) {
    // j + 1超出范围 或 j > j + 1
    let temp = j + 1 > len || compare(arr, j, j + 1) ? j : j + 1
    if(compare(arr, temp, i)) {
      swap(arr, temp, i)
      i = temp
    }else {
      break
    }
  }
}
function compare(arr, i, j) {
  // i > j 或 i === j 但 i字母小于j字母：往上走
  return (arr[i][1] > arr[j][1] || (arr[i][1] === arr[j][1] && arr[i][0] < arr[j][0]))
}
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3))
console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4))