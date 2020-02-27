// 递归
// var wordBreak = function(s, wordDict) {
//   if (!s || s.length === 0) return true;
//   let len = wordDict.length
//   for(let i = 0; i < len; i++) {
//     let itemLen = wordDict[i].length
//     if(s.substring(0, itemLen) === wordDict[i]) {
//       if (wordBreak(s.substring(wordDict[i].length), wordDict)) {
//         return true
//       }
//     }
//   }
//   return false
// }

// 记忆化回溯
var wordBreak = function(s, wordDict) {
  let map = new Map()
  function worker(s) {
    if(map.has(s)) return map.get(s);
    if (!s || s.length === 0) return true;
    let len = wordDict.length
    for(let i = 0; i < len; i++) {
      let itemLen = wordDict[i].length
      if(s.substring(0, itemLen) === wordDict[i]) {
        if (worker(s.substring(wordDict[i].length))) {
          return true
        }
      }
    }
    map.set(s, false)
    return false
  }
  return worker(s)
}

// var wordBreak = function(s, wordDict) {
//   let len = s.length
//   let dp = new Array(len + 1).fill(false) // 记录0 ~ i子串是否在字典内
//   dp[0] = true // 每次内层循环都可进行一次0 ~ i + 1的子串校验
//   for(let i = 0; i < len; i++) {
//     // 0 ~ i子字符串能否组合成功
//     for(let j = 0; j <= i; j++) {
//       // 减少重复判断已判断子子字符串
//       if(dp[j] && wordDict.includes(s.substring(j, i + 1))) { //j最大len - 1 
//         dp[i + 1] = true
//         break
//       }else {
//         dp[i + 1] = false
//       }
//     }
//   }
//   console.log(dp)
//   return dp[len]
// }

console.log(wordBreak("applepenapple", ["apple", "pen"]))
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
console.log(wordBreak('a', ['a']))
console.log(wordBreak('aaaaaaa', ['aaaa', 'aa']))
console.log(wordBreak("ccbb", ["bc","cb"]))