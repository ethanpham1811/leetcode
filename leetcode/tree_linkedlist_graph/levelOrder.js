import {toBinaryTree} from '../utils/binaryTree.js'

/* preorder DFS 
split the binary by Level of the tree
use counter to track level
*/
const levelOrder = function (root) {
  const map = []
  dfs(0, map, root)
  return map
}
function dfs(level, map, node) {
  if (!node) return

  // add subarray to main array
  // map.set(level, map.get(level) ? map.get(level).push(node.val) : [node.val])
  if (map[level]) map[level].push(node.val)
  else map[level] = [node.val]

  level++
  dfs(level, map, node.left)
  dfs(level, map, node.right)
  level--
}
console.log(levelOrder(toBinaryTree([3, 9, 20, null, null, 15, 7, 1, 1, 1, 1, 1, 1, 1, 1])))

// logn
