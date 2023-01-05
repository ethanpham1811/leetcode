/* https://leetcode.com/problems/combination-sum-ii/
  Backtracking, BEST SOLUTION! no duplication
- sort array
- ignore same index
 */
function dfs(res, list, target, index, com, total) {
  if (total === target) {
    res.push([...com])
    return
  }
  if (index >= list.length || total > target) return

  let prev = -1
  // cur = i
  for (let i = index; i < list.length; i++) {
    if (list[i] !== prev) {
      com.push(list[i])
      // i + 1
      dfs(res, list, target, i + 1, com, total + list[i])
      com.pop()
      prev = list[i]
    }
  }
}
export function combinationSum2(list, target) {
  const res = []
  dfs(res, list.sort(), target, 0, [], 0)
  return res
}
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
