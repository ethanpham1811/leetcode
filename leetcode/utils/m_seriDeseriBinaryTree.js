import {toBinaryTree, TreeNode} from './binaryTree.js'

/* 
  Serialize: simple, traverse DFS
  Deserialize:
  - loop through every sting el, increase index 1 by 1
  - encounter Null return null, that's it!
*/

// Preorder serialize
const serialize = function (root) {
  const res = {val: ''}
  dfs(res, root)
  return res.val
}
const dfs = function (res, node) {
  if (!node) {
    res.val += ',N'
    return
  }
  res.val += `,${node.val}`
  dfs(res, node.left)
  dfs(res, node.right)
}
console.log(serialize(toBinaryTree([1, 2, 3, null, null, 4, 5])))

// Deserialize
const deserialize = function (str) {
  return recur({val: 1}, str)
}
const recur = function (pos, str) {
  if (str[pos.val] === 'N') {
    pos.val += 1
    return null
  }
  const node = new TreeNode(+str[pos.val])
  pos.val += 1
  node.left = recur(pos, str)
  node.right = recur(pos, str)
  return node
}

console.log(deserialize(serialize(toBinaryTree([1, 2, 3, null, null, 4, 5]))))
