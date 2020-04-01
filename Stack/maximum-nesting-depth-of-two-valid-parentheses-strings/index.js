// var maxDepthAfterSplit = function(seq) {
//   let stack = [], res = []
//   for(let i = 0; i < seq.length; i++) {
//     if (seq[i] === '(') {
//       if (stack.length !== 0) {
//         res.push(Number(!stack[stack.length - 1]))
//       } else {
//         res.push(0)
//       }
//       stack.push(res[res.length - 1])
//     }else if (seq[i] === ')') {
//       let top = stack.pop()
//       res.push(top)
//     }
//   }
//   return res
// };

// 奇数位分给A(1),偶数位分给B(0)
var maxDepthAfterSplit = function(seq) {
  let sLen = 0, res = []
  for(let i = 0; i < seq.length; i++) {
    if (seq[i] === '(') {
      sLen += 1
      res.push(sLen % 2)
    }else if (seq[i] === ')') {
      let top = sLen % 2
      res.push(top)
      sLen -= 1
    }
  }
  return res
};

console.log(maxDepthAfterSplit("((()))"))
console.log(maxDepthAfterSplit("()(())()"))