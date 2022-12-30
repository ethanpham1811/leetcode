import {toBinaryTree} from '../utils/binaryTree.js'

/* Inorder traversal DFS (bottom-top-left-right) !!! */
let prev
function isValidBST(root) {
  prev = null
  return inorder(root)
}
function inorder(root) {
  if (root == null) return true
  // if left invalid short circuit & return false to root
  // check the left first and set PREV = left
  if (!inorder(root.left)) return false
  // check if cur.val > prev (pass)
  if (prev != null && root.val <= prev) return false
  // uset PREV = cur.val
  prev = root.val
  return inorder(root.right)
}
console.log(isValidBST(toBinaryTree([5, 4, 6, null, null, 3, 7])))

/* Pre order DFS (top-bottom-left-right) */
function validate(root, low, high) {
  if (root == null) return true
  // left low = null / right high = null
  if ((low != null && root.val <= low) || (high != null && root.val >= high)) return false
  // both left & right has to be valid
  return validate(root.right, root.val, high) && validate(root.left, low, root.val)
}

function isValidBST2(root) {
  return validate(root, null, null)
}

console.log(isValidBST2(toBinaryTree([5, 4, 6, null, null, 3, 7])))
