var coinChange = function(coins, amount) {
  let dp = new Array(amount + 1).fill(Number.MAX_VALUE)
  dp[0] = 0
  for (let i = 1; i < dp.length; i++) {
    for(let coin of coins) {
      let preCoin = i - coin
      if (preCoin >= 0) {
        dp[i] = Math.min(dp[i], dp[preCoin] + 1)
      }
    }
  }
  if (dp[amount] === Number.MAX_VALUE) return -1;
  return dp[amount]
}

console.log(coinChange([186,419,83,408], 6249))