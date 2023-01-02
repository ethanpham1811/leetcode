const array = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]
/* https://leetcode.com/problems/unique-paths-ii/
the same as unique path 1
*/
const uniquePathsWithObstacles = function (array) {
  const m = array.length
  const n = array[0].length
  const posMap = new Map()
  return dfs(array, posMap, 0, 0, m, n)
}
function dfs(array, posMap, r, c, m, n) {
  if (r < 0 || c < 0 || r > m - 1 || c > n - 1 || array[r][c] == 1) return 0
  if (r == m - 1 && c == n - 1) return 1
  if (posMap.has(`${r}_${c}`)) return posMap.get(`${r}_${c}`)

  const countDown = dfs(array, posMap, r + 1, c, m, n)
  const countRight = dfs(array, posMap, r, c + 1, m, n)
  posMap.set(`${r}_${c}`, countDown + countRight)
  return posMap.get(`${r}_${c}`)
}
console.log(uniquePathsWithObstacles(array))
