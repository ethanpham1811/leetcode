const grid1 = [
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1]
  ],
  grid2 = [
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1]
  ]
/* https://leetcode.com/problems/count-sub-islands/
- dfs 4 directions, set origin to 0 instead of use isVisited
- loop through every squares, remove square that grid2=1 & grid1=0
- loop through every squares again, count island on new grid2 as usual
 */

function countSubIslands(grid1, grid2) {
  const m = grid1.length
  const n = grid1[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] == 1 && grid1[i][j] == 0) {
        dfs(i, j, m, n, grid2)
      }
    }
  }
  // count island grid 2
  let c = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] == 1) {
        dfs(i, j, m, n, grid2)
        c += 1
      }
    }
  }
  return c
}
function dfs(i, j, m, n, grid2) {
  if (i < 0 || i == m || j < 0 || j == n || grid2[i][j] == 0) return

  grid2[i][j] = 0
  dfs(i + 1, j, m, n, grid2)
  dfs(i, j + 1, m, n, grid2)
  dfs(i, j - 1, m, n, grid2)
  dfs(i - 1, j, m, n, grid2)
}

console.log(countSubIslands(grid1, grid2))
