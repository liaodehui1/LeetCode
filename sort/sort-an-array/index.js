var sortArray = function(nums) {
  console.log(nums)
  // return bubbleSort(nums)
  // return selectionSort(nums)
  // return insertionSort(nums)
  // return mergeSort(nums)
  quickSort(nums, 0, nums.length - 1)
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
  if (left >= right) return; // 排一项，不需要
  let pivot = right // 参考点
  let i = left, j = pivot - 1 // 将i到j分为两部分：大于pivot和小于pivot
  while(i < j) {
    if (nums[i] > nums[pivot]) {
      swap(nums, i, j)
      j--
    }else {
      i++
    }
  }
  // j移动过/没移动过
  if (j < pivot - 1 || (j === pivot - 1 && nums[j] > nums[pivot])) {
    swap(nums, pivot, j) // 确定一个数
    pivot = j
  }
  quickSort(nums, left, pivot - 1) // 排左边
  quickSort(nums, pivot + 1, right) // 排右边
}

console.log(sortArray([1,1,2,0,0,5]))