import {toBinaryTree} from '../utils/binaryTree.js'

let maxPathSum = function (root) {
  const res = {val: root.val}
  const max = dfs(res, root)
  return Math.max(res.val, max)
}
function dfs(res, node) {
  if (!node) return 0

  const maxLeft = dfs(res, node.left)
  const maxRight = dfs(res, node.right)
  const sumWidth = maxLeft + maxRight + node.val
  res.val = Math.max(res.val, sumWidth, node.val)
  return Math.max(maxLeft + node.val, maxRight + node.val, node.val)
}
console.log(maxPathSum(toBinaryTree([1, 2, 1, 10, 10, 1, 1])))
