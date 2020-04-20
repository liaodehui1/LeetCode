// var topKFrequent = function(nums, k) {
//   let map = new Map()
//   // 遍历收集频率
//   for(let num of nums) {
//     if(map.has(num)) {
//       map.set(num, map.get(num) + 1)
//     }else {
//       map.set(num, 1)
//     }
//   }
//   let res = []
//   map.forEach((val, key) => {
//     if(res.length < k) { // 取K个
//       res.push(key)
//       return
//     }
//     // 遍历剩余
//     if(res.length === k) res.sort((a, b) => map.get(a) - map.get(b) < 0)
//     if(val > map.get(res[0])) { // 大于第一个(k个中最小的)
//       res[0] = key
//       swap(res)
//     }
//     // console.log(res)
//   })
//   return res
// };

// function swap(arr) {
//   let index = 0, i = 1
//   for(; i < arr.length; i++) {
//     if(arr[i] > arr[0]) {
//       index = i - 1
//       break
//     }
//   }
//   if(i === arr.length) index = arr.length - 1;
//   [arr[0], arr[index]] = [arr[index], arr[0]]
// }

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
  let arr = []
  map.forEach((val, key) => {
    arr.push([val, key])
  })
  return heapSort(arr, k)
};

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 堆排序
function heapSort (arr, k) {
  // 构建初始堆：根节点 ~ 第一个非叶子节点
  // i >= 0
  for(let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    build(arr, i, arr.length - 1)
  }
  // 取K个最大的即可
  // i > arr.length - 1 - k
  for(let i = arr.length - 1; i > arr.length - 1 - k; i--) {
    swap(arr, 0, i) // 取一个
    build(arr, 0, i - 1) // 重调堆
  }
  return arr.slice(-k).map(item => item[1]).reverse()
}

function build(arr, i, len) {
  // j为左节点
  // j <= len
  for(let j = 2 * i + 1; j <= len;) {
    // 进行val比较：arr[j + 1][0] > arr[j][0]
    let temp = j + 1 <= len && arr[j + 1][0] > arr[j][0] ? j + 1 : j
    if (arr[temp][0] > arr[i][0]) { //  大的往上走
      swap(arr, i, temp)
      i = temp // 可能影响子堆
      j = 2 * i + 1
    }else {
      break
    }
  }
}

console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))
console.log(topKFrequent([3,0,1,0], 1))
console.log(topKFrequent([5,1,-1,-8,-7,8,-5,0,1,10,8,0,-4,3,-1,-1,4,-5,4,-3,0,2,2,2,4,-2,-4,8,-7,-7,2,-8,0,-8,10,8,-8,-2,-9,4,-7,6,6,-1,4,2,8,-3,5,-9,-3,6,-8,-5,5,10,2,-5,-1,-5,1,-3,7,0,8,-2,-3,-1,-5,4,7,-9,0,2,10,4,4,-4,-1,-1,6,-8,-9,-1,9,-9,3,5,1,6,-1,-2,4,2,4,-6,4,4,5,-5], 7))