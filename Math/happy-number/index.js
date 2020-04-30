// map判断是否循环
// var isHappy = function(n) {
//   let map = new Map()
//   while(true) {
//     let sum = 0
//     while(n) {
//       let i = n % 10
//       sum += i * i
//       n = Math.floor(n / 10)
//     }
//     if(sum === 1) return true
//     if(map.has(sum)) return false
//     n = sum
//     map.set(sum, 1)
//   }
// };

// 快慢指针
// 是快乐数：fast最终在等slow
// 不是快乐数：fast在循环内追赶slow
var isHappy = function(n) {
  let slow = n, fast = compute(n)
  // compute(1) -> 1：fast可能先知道n可以为1，此时fast一直将为1等待slow到达
  // fast === slow时，fast !== 1则存在无线循环
  while(fast !== 1 && fast !== slow) {
    slow = compute(slow) //走一步
    fast = compute(compute(fast)) // 走两步
  }
  return fast === 1 // n最终可以为1
};
function compute(n) {
  let sum = 0
  while(n) {
    let i = n % 10
    sum += i * i
    n = Math.floor(n / 10)
  }
  return sum
}

console.log(isHappy(19))