// FIXME:
/* Bottom up brute force DP solution
2d matrix: Iteration O(n*m)
  | a | a | a | b |
x | 3 | 2 | 2 | 2 | 0
x | 3 | 2 | 2 | 2 | 0
b | 3 | 2 | 2 | 2 | 0
a | 3 | 2 | 2 | 1 | 0
a | 2 | 2 | 1 | 1 | 0
a | 1 | 1 | 1 | 0 | 0 <--start from here
    0   0   0   0

  2 pointer, if match, increase two pointer
  if not, find Max(increase p1, increase p2)
 */
let longestCommonSubsequence = function (first, second) {
  const dp = Array(first.length + 1)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(second.length + 1).fill(0)
  }
  for (let i = first.length - 1; i >= 0; i--) {
    for (let j = second.length - 1; j >= 0; j--) {
      if (first[i] == second[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1]
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1])
      }
    }
  }
  return dp[0]
}
// console.log(longestCommonSubsequence('bb', 'b'))
// console.log(longestCommonSubsequence('aaab', 'xxbaaa'))
console.log(longestCommonSubsequence('abcde', 'acxe'))

/* my recursion approach applied above technique */
let longestCommonSubsequence2 = function (first, second) {
  let p1 = 0
  let p2 = 0
  return recur(p1, p2, first, second)
}
function recur(p1, p2, first, second) {
  if (p1 == first.length || p2 == second.length) {
    return 0
  }
  let res = 0
  if (first[p1] == second[p2]) {
    res = 1 + recur(p1 + 1, p2 + 1, first, second)
  } else {
    res = Math.max(recur(p1 + 1, p2, first, second), recur(p1, p2 + 1, first, second))
  }
  return res
}
// console.log(longestCommonSubsequence2('ebadcxe', 'ace'))

/* DFS no duplication no DP => time limit exceeded */
let longestCommonSubsequence3 = function (first, second) {
  let res = {val: 0}
  // let res = []
  dfs(-1, [], res, first, second, 0, 0)
  return res.val
  // return res.reduce((acc, cur) => (acc < cur.length ? cur.length : acc), 0)
}
function dfs(leftBound, com, res, first, second, index, count) {
  if (index == first.length) {
    // res.push([...com])
    res.val = Math.max(res.val, com.length)
    return
  }
  for (let i = index; i < first.length; i++) {
    const pos = second.slice(leftBound + 1).indexOf(first[i])
    if (pos != -1) {
      com.push(first[i])
      dfs(pos, com, res, first, second, i + 1, count)
      com.pop()
    } else if (i === first.length - 1) {
      // res.push([...com])
      res.val = Math.max(res.val, com.length)
    }
  }

  // dfs(leftBound, com, res, first, second, i + 1, count)
}
