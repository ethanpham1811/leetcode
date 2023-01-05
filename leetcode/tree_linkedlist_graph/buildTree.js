import {TreeNode} from '../utils/binaryTree.js'

/* 
  preorder: [0] always the root
  inorder: left of root always on the left, right always on the right
  not finish, still bug
*/
function buildTree(pre, ino) {
  if (pre.length == 0 || ino.length == 0) return null
  const root = pre[0]

  const mid = ino.indexOf(root)
  const preRightIndex = mid + 1
  const inoRightIndex = mid + 1

  const left = buildTree(pre.slice(1, preRightIndex), ino.slice(0, inoRightIndex - 1))
  const right = buildTree(pre.slice(preRightIndex), ino.slice(inoRightIndex))

  return new TreeNode(root, left, right)
}
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))
