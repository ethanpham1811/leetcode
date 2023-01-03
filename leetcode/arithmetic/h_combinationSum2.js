/* https://leetcode.com/problems/combination-sum-ii/
  
  Backtracking, BEST SOLUTION!
- use i to handle index (not using forloop index)
- set forloop index =i+1
 */
function dfs(res, list, target, i, com, total) {
  if (total === target) {
    res.push([...com])
    return
  }
  if (i >= list.length || total > target) return

  let prev = -1
  // cur = i
  for (let cur = i; cur < list.length; cur++) {
    if (list[cur] !== prev) {
      com.push(list[cur])
      // cur + 1
      dfs(res, list, target, cur + 1, com, total + list[cur])
      com.pop()
      prev = list[cur]
    }
  }
}
export function combinationSum2(list, target) {
  const res = []
  dfs(res, list.sort(), target, 0, [], 0)
  return res
}
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))

/*
Backtracking (this solution is wrong if there is 2 same number in list, check 2nd solution!)
- sort the list
- skip duplicated iteration
- check list[i] for only 1 time
- then check list[i+1] for the rest
*/
function dfs(res, list, target, i, com, total, prev) {
  if (total === target) {
    res.push([...com])
    return
  }
  if (i >= list.length || total > target) return

  // skip duplicate iteration (1,1) [1,1,2,5...]
  if (list[i] !== list[i - 1] || i == 0) {
    // check list[i] for only 1 time (skip rest items)
    if (list[i] !== prev) {
      com.push(list[i])
      dfs(res, list, target, i, com, total + list[i], list[i])
      com.pop()
    }
  }
  // then check rest item: list[i+1]
  dfs(res, list, target, i + 1, com, total, null)
}
export function combinationSum2(list, target) {
  const res = []
  // have to sort the list
  dfs(res, list.sort(), target, 0, [], 0, null)
  return res
}
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))

/* Backtracking with Duplication, non DP */
export function main(list, target) {
  let res = []
  const used = Array(list.length).fill(false)
  backtrack(0, res, target, list, [], used)
  return res
}

function backtrack(total, res, target, list, permutation, used) {
  if (total === target) {
    res.push([...permutation])
    return
  }
  for (let i = 0; i < list.length; i++) {
    if (!used[i]) {
      used[i] = true
      permutation.push(list[i])
      backtrack(total + list[i], res, target, list, permutation, used)
      used[i] = false
      permutation.pop()
    }
  }
}
console.log(main([10, 1, 2, 7, 6, 1, 5], 8))
