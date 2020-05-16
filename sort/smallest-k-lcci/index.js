var smallestK = function(arr, k) {
  // return insertionSort(arr, k)

  // quickSort(arr, 0, arr.length - 1)
  // return arr.slice(0, k)

  return heapSort(arr, k)
};

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 插入排序
function insertionSort(arr, k) {
  for(let i = 0; i < arr.length; i++) {
    let j = i
    while(j > 0 && arr[j] < arr[j - 1]) { // 一格一格往前移
      swap(arr, j, j - 1)
      j--
    }
  }
  return arr.slice(0, k)
}

// 快速排序
function quickSort(arr, left, right) {
  if(left >= right) return
  let pivot = left, i = left + 1, j = right
  while(i < j) {
    if(arr[i] > arr[pivot]) {
      swap(arr, i, j)
      j--
    }else {
      i++
    }
  }
  let t = arr[i] >= arr[pivot] ? i - 1 : i
  swap(arr, t, pivot)
  pivot = t
  quickSort(arr, left, pivot - 1)
  quickSort(arr, pivot + 1, right)
}

// 堆排序
function heapSort(arr, k) {
  // 建初堆
  for(let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    build(arr, i, arr.length - 1)
  }
  // 调整堆
  for(let i = arr.length - 1; i >= arr.length - k; i--) {
    swap(arr, 0, i)
    build(arr, 0, i - 1)
  }
  return k > 0 ? arr.slice(-k).reverse() : []
}

function build(arr, i, len) {
  for(let j = 2 * i + 1; j <= len;) {
    let t = (j + 1 <= len && arr[j + 1] < arr[j]) ? j + 1 : j
    if(arr[t] < arr[i]) {
      swap(arr, t, i)
      i = t
      j = 2 * i + 1
    }else {
      break
    }
  }
}