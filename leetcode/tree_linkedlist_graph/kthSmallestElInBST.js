import {toBST} from '../utils/binaryTree.js'

/* https://leetcode.com/problems/kth-smallest-element-in-a-bst
Using Stack
[5, 3, 6, 2, 4, null, 1]
Add stack in order: all left node -> right bottom to top
pop left node -> check if already match k -> no: add right node -> repeat the process
-> 5, 3, 2, 4, 6, 1
IS BUGGING
 */
function kthSmallest(root, k) {
  // stack: [Node(5), Node(3), Node(2)...]
  const stack = []

  // run infinitively until return root.val
  while (true) {
    // push all left node
    while (root != null) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if (--k == 0) return root.val
    root = root.right
  }
}
console.log(kthSmallest(toBST([3, 1, 4, null, 2], 1)))

/* 
just use inorder DFS to find 1st 2nd 3rd smallest
 */
import {toBST} from '../utils/binaryTree.js'
let kthSmallest = function (root, k) {
  return dfs(k, root, {val: null})
}
function dfs(k, node, counter) {
  if (!node) {
    if (!counter.val) counter.val = 0
    return null
  }
  const resLeft = dfs(k, node.left, counter)
  if (counter.val == k) return node.val
  counter.val !== null && counter.val++

  const resRight = dfs(k, node.right, counter)
  return resLeft || resRight
}
// console.log(kthSmallest(toBST([500, 30, 655, 23, 80, null, null, 9]), 3))
console.log(kthSmallest(toBST([5, 3, 6, 2, 4, null, null, 1], 3)))
