/* https://leetcode.com/problems/coin-change
Bottom up noduplication (DP) O(n*m)
- instead of find sub to match 7, find sub to match 0..1..2....7 (find Math.min)
- use prev target values to find subsequent target values (0-1-2...7)

- [1,3,4,5] - dp[0,1,2,?,?...Inf(7)]
- ex: to reach target=3 (dp[3]), loop through each coin [1,3,4,5] to find min num of coins to reach 3
 */
let coinChange = function (list, target) {
  const dp = Array(target + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= target; i++) {
    for (const c of list) {
      if (i - c >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - c])
    }
  }
  console.log(dp)
  return dp[target] !== Infinity ? dp[target] : -1
}
console.log(coinChange([1, 3, 4, 5], 7))
// console.log(coinChange([2], 3))

/* 
  Brute force DFS with duplication
*/
let coinChange2 = function (list, target) {
  const res = {val: -1}
  dfs(list, res, 0, target, 0, 0)
  return res.val
}
function dfs(list, res, com, target, total, i) {
  if (total == target) {
    res.val = com < res.val || res.val == -1 ? com : res.val
    return
  }
  if (i >= list.length || total > target || com == res.val) return
  com++
  dfs(list, res, com, target, total + list[i], i)
  com--
  dfs(list, res, com, target, total, i + 1)
}
// console.log(coinChange2([2], 3))
// console.log(coinChange2([2, 3, 6, 7], 7))
// console.log(coinChange2([3, 7, 405, 436], 8839))
