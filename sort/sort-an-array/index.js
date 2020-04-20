var sortArray = function(nums) {
  // console.log(nums)
  // return bubbleSort(nums)
  // return selectionSort(nums)
  // return insertionSort(nums)
  // return mergeSort(nums)
  // quickSort(nums, 0, nums.length - 1)
  heapSort(nums)
  return nums
};

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]]
}

// 冒泡排序
function bubbleSort(nums) {
  for(let i = 0; i < nums.length; i++) {
    let exchange = false
    for(let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        exchange = true
        swap(nums, j, j + 1)
      }
    }
    if (!exchange) break
    console.log(nums)
  }
  return nums
}

// 选择排序
function selectionSort(nums) {
  for(let i = 0; i < nums.length; i++) {
    let minIndex = i
    for(let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }
    if(minIndex != i) {
      swap(nums, minIndex, i)
    }
  }
  return nums
}

// 插入排序
function insertionSort(nums) {
  for(let i = 0; i < nums.length; i++) {
    let j = i
    while(j > 0 && nums[j] < nums[j - 1]) {
      swap(nums, j, j - 1)
      j--
    }
    // console.log(nums)
  }
  return nums
}

// 归并排序(分治思想)
function mergeSort(nums) {
  if (nums.length === 1) return nums

  let mid = Math.floor(nums.length / 2)
  let left = nums.slice(0, mid)
  let right = nums.slice(mid, nums.length)

  let lleft = mergeSort(left)
  let rright = mergeSort(right)

  return merge(lleft, rright)
}
function merge(arr1, arr2) {
  let i = 0, j = 0, res = []
  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      res.push(arr1[i])
      i++
    }else {
      res.push(arr2[j])
      j++
    }
  }
  while(i < arr1.length) {
    res.push(arr1[i])
    i++
  }
  while(j < arr2.length) {
    res.push(arr2[j])
    j++
  }
  return res
}

function quickSort(nums, left, right) {
  if(left >= right) return;
  let pivot = left // 参考点
  let i = pivot + 1, j = right
  while(i < j) {
    if (nums[i] > nums[pivot]) {
      swap(nums, i, j)
      j--
    }else {
      i++
    }
  }
  // i未移动且nums[i] < nums[pivot]交换
  // i移动了此时i位于第一个大于nums[pivot]的数所在位置，应该和i-1位置数交换
  i = nums[i] < nums[pivot] ? i : i - 1
  swap(nums, pivot, i)
  pivot = i
  quickSort(nums, left, pivot - 1) // 排左边
  quickSort(nums, pivot + 1, right) // 排右边
}

function heapSort(arr) {
  console.log(arr)
  // 从下往上，建初始堆(大根堆：根节点最大)
  for(let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    build(arr, i, arr.length - 1)
  }
  console.log(arr)
  // 调整堆
  for(let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i) // 交换后，i位置数为确定的最大数
    build(arr, 0, i - 1) // 对0 ~ i-1重建堆
  }
  return arr
}
function build(arr, i, len) {
  for(let j = 2 * i + 1; j <= len;) { // j 表示左子节点
    let temp = j + 1 <= len && arr[j + 1] > arr[j] ? j + 1 : j // 取左右子节点最大的那个
    if(arr[i] < arr[temp]) { // 如果最大的子节点大于当前节点，则交换
      swap(arr, i, temp) // 交换
      i = temp // 改变了子节点，可能会影响以子节点为根节点的堆，重调
      j = 2 * i + 1 // j 表示此时i的左子节点
    }else { // 否则，已完成：以子节点为根节点已经符合堆
      break
    }
  }
}

// console.log(sortArray([0,1,1,2,0]))
// console.log(sortArray([1,1,2,0,0,5]))
// console.log(sortArray([4, 5, 6]))
console.log(sortArray([
  5, 4, 10, 6,  4, 6, 7,
  6, 4,  3, 2, 12, 5, 8,
  4, 5,  5, 2,  1, 1
]))