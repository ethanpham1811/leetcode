import {toBinaryTree, TreeNode} from '../utils/binaryTree.js'

let lowestCommonAncestor = function (root, p, q) {
  let cur = root
  while (cur) {
    if (p.val > cur.val && q.val > cur.val) {
      cur = cur.right
    } else if (p.val < cur.val && q.val < cur.val) {
      cur = cur.left
    } else {
      return cur.val
    }
  }
}

console.log(lowestCommonAncestor(toBinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), new TreeNode(7), new TreeNode(9)))
