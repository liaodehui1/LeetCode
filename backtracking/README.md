# 回溯法
1. 所有可能模板
```js
function backtrack(nums, path, res) {
  if (path.length === nums.length) {
    // 开始回溯
    // 数组 引用类型 pop操作最终会清空temp
    // 或者 [...path]
    res.push(path.slice(0)) 
    return;
  }
  let len = nums.length
  for(let i = 0; i < len; i++) {
    path.push(nums[i])
    backtrack(nums, path, res)
    path.pop()
  }
}
```