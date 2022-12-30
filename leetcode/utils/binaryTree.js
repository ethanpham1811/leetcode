/*
convert to tree
 */
export function TreeNode(val, left, right) {
  this.val = val
  this.left = left ? left : null
  this.right = right ? right : null
}
export function toBinaryTree(list) {
  return dfs(list, 0, 1)
}
function dfs(list, i, offset) {
  const val = list[i]
  const leftIndex = i + offset
  const rightIndex = i + offset + 1
  const hasLeft = leftIndex < list.length
  const hasRight = rightIndex < list.length

  const left = hasLeft ? dfs(list, leftIndex, offset * 2) : null
  const right = hasRight ? dfs(list, rightIndex, offset * 2 + 1) : null
  return !val ? null : new TreeNode(val, left, right)
}

export function toBST(list) {
  return buildBST(list, 0, 1)
}
function buildBST(list, i, offset) {
  const val = list[i]
  const leftIndex = i + offset
  const rightIndex = i + offset + 1
  const hasLeft = leftIndex < list.length
  const hasRight = rightIndex < list.length

  const left = hasLeft ? buildBST(list, leftIndex, offset * 2) : null
  const right = hasRight ? buildBST(list, rightIndex, offset * 2 + 1) : null
  return val !== null ? new TreeNode(val, left, right) : null
}
// console.log(toBinaryTree([3, 4, 5, 1, 3, null, 1, 21, 22, 55, 56, 99, 95, 35, 36]))

// 3  9 7   8 2   9 2   7 5   9 1 0
