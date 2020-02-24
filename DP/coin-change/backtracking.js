// var coinChange = function(coins, amount) {
//   function worker (chioces, count) {
//     if (count === 0) return 0;
//     if(count < 0) return -1;
//     let res = Number.MAX_VALUE
//     for(let coin of chioces) {
//       let subCoin = worker(chioces, count - coin)

//       if (subCoin === -1) continue; // 无法构成amount
//       let num = subCoin + 1
//       res = Math.min(num, res)
//     }
//     // 所有不符合，从下往上
//     if (res === Number.MAX_VALUE) return -1;
//     return res
//   }
//   return worker(coins, amount)
// };

// 记住小的
var coinChange = function(coins, amount) {
  let arr = new Array(amount)// 0 ~ amount - 1
  function worker (chioces, count) {
    if (count === 0) return 0;
    if(count < 0) return -1;
    if(arr[count - 1]) return arr[count - 1] // 已记录则不再计算
    let min = Number.MAX_VALUE
    for(let coin of chioces) {
      let subCoin = worker(chioces, count - coin)

      if (subCoin === -1) continue; // 无法构成amount
      let num = subCoin + 1
      min = Math.min(num, min) // 和上次最少比较
    }
    arr[count - 1] = (min === Number.MAX_VALUE) ? -1 : min
    // 所有不符合，从下往上
    // if (!arr[count - 1]) return -1; // 会跳过
    return arr[count - 1] // 结果
  }
  return worker(coins, amount)
};

console.log(coinChange([186,419,83,408], 6249))