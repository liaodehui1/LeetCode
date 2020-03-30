// 模拟超时
// var lastRemaining = function(n, m) {
//   if (m === 1) return n - 1
//   if (n === 1) return 0
//   let arr = new Array(n)
//   for(let i = 0; i < n; i++) arr[i] = i
//   let i = 0, count = n, step = 1
//   while(count !== 1) { // m > 1
//     i++
//     if (i === n) i = 0
//     if (arr[i] === -1) continue
//     step++ // arr[i] !== -1
//     if (step % m === 0) {
//       arr[i] = -1
//       count--
//     }
//     console.log(i, arr)
//   }
//   return arr.findIndex(val => val !== -1)
// };

// 模拟超时
// var lastRemaining = function(n, m) {
//   if (m === 1) return n - 1
//   if (n === 1) return 0
//   let arr = new Array(n)
//   for(let i = 0; i < n; i++) arr[i] = i
//   let i = 0, step = 1
//   while(arr.length !== 1) { // m > 1
//     i++
//     if (i === arr.length) i = 0
//     step++
//     if (step % m === 0) {
//       arr.splice(i, 1)
//       i--
//     }
//     // console.log(i, arr)
//   }
//   return arr[0]
// };

// var lastRemaining = function(n, m) {
//   if (m === 1) return n - 1
//   if (n === 1) return 0
//   let pos = 0
//   for(let i = 2; i <= n; i++) {
//     pos = (pos + m) % i
//   }
//   return pos
// };

// Maximum call stack size exceeded
// var lastRemaining = function(n, m) {
//   if (m === 1) return n - 1
//   if (n === 1) return 0
//   return worker(n, m)
// };
// function worker(n, m) {
//   if (n === 1) return 0
//   let x = worker(n - 1, m)
//   return (x + m) % n
// }

console.log(lastRemaining(70866, 116922))