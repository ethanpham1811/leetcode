/* https://leetcode.com/problems/unique-paths
20  10  4   1
10  6   3   1
4   3   2   1
1   1   1   0

nth tile = nth down tile + nth right tile
*/
const uniquePaths = function (m, n) {
  const posMap = new Map()
  return dfs(posMap, 0, 0, m, n)
}
function dfs(posMap, r, c, m, n) {
  if (r < 0 || c < 0 || r > m - 1 || c > n - 1) return 0
  if (r == m - 1 && c == n - 1) return 1
  if (posMap.has(`${r}_${c}`)) return posMap.get(`${r}_${c}`)

  const countDown = dfs(posMap, r + 1, c, m, n)
  const countRight = dfs(posMap, r, c + 1, m, n)
  posMap.set(`${r}_${c}`, countDown + countRight)
  return posMap.get(`${r}_${c}`)
}
console.log(uniquePaths(4, 4))
