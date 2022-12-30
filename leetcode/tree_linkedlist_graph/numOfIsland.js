const grid = [
  ['1', '1', '1'],
  ['0', '1', '0'],
  ['1', '1', '1']
]
/* https://leetcode.com/problems/number-of-islands/
dfs every node that not visited
4 direction
 */
export const numIslands = function (grid) {
  const isVisited = new Set()
  const res = {val: 0}
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      dfs(true, i, j, isVisited, grid, res)
    }
  }
  return res.val
}
const dfs = function (isStart, r, c, isVisited, grid, res) {
  if (r < 0 || c < 0 || r == grid.length || c == grid[0].length) return
  if (isVisited.has(`${r}-${c}`) || grid[r][c] == 0) return
  isVisited.add(`${r}-${c}`)
  isStart && res.val++

  dfs(false, r + 1, c, isVisited, grid, res)
  dfs(false, r - 1, c, isVisited, grid, res)
  dfs(false, r, c + 1, isVisited, grid, res)
  dfs(false, r, c - 1, isVisited, grid, res)
}
console.log(numIslands(grid))
