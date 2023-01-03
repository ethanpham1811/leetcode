import {toBinaryTree} from '../utils/binaryTree.js'

/* https://leetcode.com/problems/house-robber-iii/ 
Pattern for recursion binary tree: DFS O(n) 
function dfs(root) {
  left =dfs(root.left)
  right =dfs(root.right)
  return (sth base on left, right)
}
*/
export function rob3(list) {
  const root = toBinaryTree(list)
  return Math.max(...dfs(root))
}
function dfs(root) {
  if (!root) return [0, 0]

  const left = dfs(root.left)
  const right = dfs(root.right)

  const withRoot = root.val + left[1] + right[1]
  const withoutRoot = Math.max(...left) + Math.max(...right)
  return [withRoot, withoutRoot]
}
console.log(rob3([3, 4, 5, 1, 3, null, 1]))
