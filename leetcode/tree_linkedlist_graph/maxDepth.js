import {toBinaryTree} from '../utils/binaryTree.js'

/* https://leetcode.com/problems/maximum-depth-of-binary-tree/ 
  - return the count directly from dfs
  - use Max(dfs(left), dfs(right)) to get the max count
*/
let maxDepth1 = function (root) {
  return dfs(root)
}
function dfs(root) {
  if (!root) return 0
  return 1 + Math.max(dfs(root.left), dfs(root.right))
}
console.log(maxDepth1(toBinaryTree([1, null, 2])))

/* 
Naive approach, increase count each dfs O(n)
*/
let maxDepth = function (root) {
  const count = []
  dfs(root, count, 0)
  return Math.max(...count)
}
function dfs(root, count, tmpCount) {
  if (!root) {
    count.push(tmpCount)
    return
  }
  tmpCount++
  dfs(root.left, count, tmpCount)
  dfs(root.right, count, tmpCount)
}
console.log(maxDepth(toBinaryTree([1, null, 2])))
