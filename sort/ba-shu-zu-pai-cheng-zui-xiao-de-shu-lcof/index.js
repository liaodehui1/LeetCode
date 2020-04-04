// // 暴力法
var minNumber = function (nums) {
  let min, len = nums.length
  function worker(start) {
    if (start === len) {
      // console.log(nums)
      let res = nums.join('')
      return min = !min || min > res ? res : min
    }
    for (let i = start; i < len; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]]
      worker(start + 1); // 封号不可少
      [nums[i], nums[start]] = [nums[start], nums[i]]
    }
  }
  worker(0)
  return min
};

// 快排 超时
// var minNumber = function (nums) {
//   let min, len = nums.length
//   quickSort(nums, 0, len - 1)
//   console.log(nums)
//   function worker(start) {
//     if (start === len) {
//       let res = nums.join('')
//       return min = !min || min > res ? res : min
//     }
//     for (let i = start; i < len; i++) {
//       [nums[start], nums[i]] = [nums[i], nums[start]]
//       worker(start + 1); // 封号不可少
//       [nums[i], nums[start]] = [nums[start], nums[i]]
//     }
//   }
//   worker(0)
//   return min
// };

function quickSort(nums, start, end) {
  if (start >= end) return;
  let pivot = end
  let i = start, j = pivot - 1
  while (i < j) {
    if (nums[i] + '' > nums[pivot] + '') {
      swap(nums, i, j)
      j--
    } else {
      i++
    }
  }
  // j移动过/没移动过
  if (j < pivot - 1 || (j === pivot - 1 && nums[j] + '' > nums[pivot] + '')) {
    swap(nums, pivot, j) // 确定一个数
    pivot = j
  }
  // 排左边
  quickSort(nums, start, pivot - 1)
  // 排右边
  quickSort(nums, pivot + 1, end)
}

function swap(nums, i, j) {
  [nums[j], nums[i]] = [nums[i], nums[j]]
}

// 自定义排序
// var minNumber = function (nums) {
//   nums.sort((a,b) => {
//     // ''需要在中间
//     if (a + '' + b > b + '' + a) {
//       return 1 // a需要在b后面
//     }else if (a + '' + b < b + '' + a) {
//       return -1 // a需要在b前面
//     }else {
//       return 0 // 无需交换
//     }
//   })
//   // console.log(nums)
//   return nums.join('')
// };

console.log(minNumber([3, 30, 34, 5, 9]))
// console.log(minNumber([ 8, 8, 8, 8, 8, 9, 9, 9, 9, 9 ]))