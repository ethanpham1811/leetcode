import {toBinaryTree} from '../utils/binaryTree.js'

/* https://leetcode.com/problems/binary-tree-level-order-traversal/description/
BFS with Queue BEtter Approach
- push level 0 to queue
- use index to cut queue
- while(queue.isNotEmpty){
    len = queue.length
    com = []

    loop (0->len) {
      cur = queue.shift()
      if cur {
        com.push(cur)
        add children of cur to queue
      }
    }
    res.push(com)
  }
}
*/
const levelOrder2 = function (root) {
  const res = []
  const queue = []
  queue.push(root)

  while (queue.length > 0) {
    const len = queue.length
    const com = []
    // cut the queue using index by length
    for (let i = 0; i < len; i++) {
      const cur = queue.shift()
      if (cur) {
        com.push(cur.val)
        queue.push(cur.left)
        queue.push(cur.right)
      }
    }
    if (com.length > 0) res.push(com)
  }
  return res
}
console.log(levelOrder2(toBinaryTree([1, 2, 3, 4, 5])))

/* https://leetcode.com/problems/binary-tree-level-order-traversal/description/
BFS with Queue
- push level 0 to queue
- while(queue.isNotEmpty){
    pop level 0 & push to com

    if (queue.isEmpty) {
      loop (level 0 children) {
        add children to queue
      }
      res.push(com)
      com = []
    }
  }
}
*/
const levelOrder = function (root) {
  const res = []
  const queue = []
  // push level 0 to queue
  queue.push(root)

  let com = []
  while (queue.length > 0) {
    // pop level 0 & process
    const cur = queue.shift()
    cur && com.push(cur)

    if (queue.length == 0) {
      // when queue is empty, get children of level 0, make them to be level 0
      for (const el of com) {
        el.left && queue.push(el.left)
        el.right && queue.push(el.right)
      }
      res.push(com)
      com = []
    }
  }
  return res.map((el) => el.map((el) => el.val))
}
console.log(levelOrder(toBinaryTree([1, 2, 3, 4, 5, 6, 7, 8])))
