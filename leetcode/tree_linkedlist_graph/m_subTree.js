import {toBinaryTree} from '../utils/binaryTree.js'

/* Recursion solution O(n.m) - Space O(n+m) (the isSameTree stack will be popped out so it can't be n.m)
- traverse through the tree DFS
- if not matched (on going) -> check isSameTree of (left & subroot || right & subroot)
- if matched -> check isSameTree of (root & subroot)
*/

let isSubtree = function (root, subRoot) {
  if (!root) return false
  if (!subRoot) return true

  if (isSameTree(root, subRoot)) return true

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}
function isSameTree(first, second) {
  if (!first && !second) return true
  if (!first || !second) return false
  // if (first.val != second.val) return false

  const sameVal = first.val == second.val
  const sameLeft = isSameTree(first.left, second.left)
  const sameRight = isSameTree(first.right, second.right)
  return sameVal && sameLeft && sameRight
}

// console.log(isSubtree(toBinaryTree([1, 1]), toBinaryTree([1])))
console.log(isSubtree(toBinaryTree([3, 4, 5, 1, 2]), toBinaryTree([4, 1, 2])))
