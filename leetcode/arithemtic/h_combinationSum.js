/* https://leetcode.com/problems/combination-sum/
Backtracking wihout duplication
*/
function dfs(res, list, target, i, com, total) {
  if (target == total) {
    res.push([...com])
    return
  }
  if (i >= list.length || total > target) return

  com.push(list[i])
  dfs(res, list, target, i, com, total + list[i])
  com.pop()
  // next iteration (like forloop) but with tweaked param
  // for (let i = 0; i < list.length; i++) {
  //     com.push(list[i])
  //     dfs(res, list, com, total)
  //     com.pop()
  //   }
  dfs(res, list, target, i + 1, com, total) // important: i+1 === forloop (let j=i)
}
export function combinationSum(list, target) {
  const res = []
  dfs(res, list, target, 0, [], 0)
  return res
}

console.log(combinationSum([2, 3, 6, 7], 7))
