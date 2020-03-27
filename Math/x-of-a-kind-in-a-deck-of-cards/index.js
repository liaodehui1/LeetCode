// 枚举
// var hasGroupsSizeX = function(deck) {
//   if(deck.length === 1) return false
//   let map = new Map(), min = Infinity
//   for(let item of deck) {
//     if(map.has(item)) {
//       map.set(item, map.get(item) + 1)
//     }else {
//       map.set(item, 1)
//     }
//   }
//   map.forEach(val => {
//     min = Math.min(min, val)
//   })
//   // 就是在求map中所有数是否都可被某一个数（最大公约数）整除
//   for(let i = 2; i <= min; i ++) {
//     let flag = true
//     map.forEach(val => {
//       if(val % i !== 0) flag = false
//     })
//     if (flag) return true
//   }
//   return false
// };

// 最大公约数
var hasGroupsSizeX = function(deck) {
  if(deck.length === 1) return false
  let map = new Map()
  for(let item of deck) {
    if(map.has(item)) {
      map.set(item, map.get(item) + 1)
    }else {
      map.set(item, 1)
    }
  }

  let g = -1
  map.forEach(val => {
    if (g === -1) {
      g = val
    } else {
      g = gcd(g, val)
    }
  })
  return g !== 1
};

function gcd(x, y) {
  // x是余数,余数需要被除
  return x === 0 ? y : gcd(y % x, x)
}

let g = -1;
[319,377].forEach(val => {
  if (g === -1) {
    g = val
  } else {
    g = gcd(g, val)
  }
})
console.log(g)

// console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]))
// console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]))
// console.log(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]))