import {toBinaryTree} from '../utils/binaryTree.js'

function isSameTree(first, second) {
  if (!first && !second) return true
  if (!first || !second) return false
  // if (first.val != second.val) return false

  const sameVal = first.val == second.val
  const sameLeft = isSameTree(first.left, second.left)
  const sameRight = isSameTree(first.right, second.right)
  return sameVal && sameLeft && sameRight
}
console.log(isSameTree(toBinaryTree([1, 2, 3, 4, 5]), toBinaryTree([1, 2, 3, 4, 5])))
