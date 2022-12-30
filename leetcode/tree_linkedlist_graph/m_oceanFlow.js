const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]
]
/* https://leetcode.com/problems/pacific-atlantic-water-flow/
  DFS
*/
const pacificAtlantic = function (heights) {
  const res = []
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      const isVisited = new Set()
      const isValid = {pacific: false, atlantic: false}
      dfs(isValid, heights, i, j, Infinity, isVisited)
      if (isValid.pacific && isValid.atlantic) res.push([i, j])
    }
  }
  return res
}
function dfs(isValid, heights, r, c, prev, isVisited) {
  if (r < 0 || c < 0) {
    isValid.pacific = true
    return
  }
  if (r == heights.length || c == heights[0].length) {
    isValid.atlantic = true
    return
  }
  const cur = heights[r][c]
  if (cur > prev) return
  if (isVisited.has(`${r}-${c}`)) return

  isVisited.add(`${r}-${c}`)

  dfs(isValid, heights, r, c + 1, cur, isVisited)
  dfs(isValid, heights, r + 1, c, cur, isVisited)
  dfs(isValid, heights, r, c - 1, cur, isVisited)
  dfs(isValid, heights, r - 1, c, cur, isVisited)
}
console.log(pacificAtlantic(heights))
