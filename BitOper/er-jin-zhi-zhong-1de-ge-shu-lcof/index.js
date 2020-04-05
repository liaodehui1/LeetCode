// var hammingWeight = function(n) {
//   let count = 0
//   while(n) {
//     count += n % 2
//     n = Math.floor(n / 2)
//   }
//   return count
// };

// var hammingWeight = function(n) {
//   let count = 0
//   while(n) {
//     count += n & 1 // 判断二进制最后一位是否为1
//     n >>= 1 // n = n >> 1 或 n = n / 2
//   }
//   return count
// };

// 消1
var hammingWeight = function(n) {
  let count = 0
  while(n) {
    count++ // 每次减少一个1
    n &= n - 1 // n = n & (n - 1)
  }
  return count
};

console.log(hammingWeight(9))