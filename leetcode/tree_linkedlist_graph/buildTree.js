import {TreeNode} from '../utils/binaryTree.js'

/* 
  preorder: [0] always the root
  inorder: left of root always on the left, right always on the right
  not finish, still bug
*/
function buildTree(pre, ino) {
  if (!pre || !ino) return null
  const root = pre[0]
  const mid = ino.indexOf(root)

  const left = buildTree(pre.slice(1, mid + 1), ino.slice(0, mid))
  const right = buildTree(pre.slice(mid + 1), ino.slice(mid + 1))

  return new TreeNode(root, left, right)
}
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))
