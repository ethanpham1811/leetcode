/* https://leetcode.com/problems/combination-sum/
Backtracking wihout duplication 
same as coin change
*/
function dfs(res, list, target, index, com, total) {
  if (target == total) {
    res.push([...com])
    return
  }
  if (index >= list.length || total > target) return

  // com.push(list[i])
  // dfs(res, list, target, i, com, total + list[i])
  // com.pop()
  // dfs(res, list, target, i + 1, com, total) // important: i+1 === forloop (let j=i)

  // next iteration (like forloop) but with tweaked param, This fl cause duplication
  for (let i = index; i < list.length; i++) {
    com.push(list[i])
    dfs(res, list, target, i, com, total + list[i])
    com.pop()
  }
}
export function combinationSum(list, target) {
  const res = []
  dfs(res, list, target, 0, [], 0)
  return res
}

console.log(combinationSum([2, 3, 6, 7], 9))
