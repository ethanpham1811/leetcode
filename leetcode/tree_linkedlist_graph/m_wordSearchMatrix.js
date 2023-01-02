function TrieNode() {
  this.children = new Map()
  this.isWord = false
  this.insert = function (word) {
    let cur = this
    for (const l of word) {
      !cur.children.has(l) && cur.children.set(l, new TrieNode())
      cur = cur.children.get(l)
    }
    cur.isWord = true
    return this.tree
  }
}
const matrix = [
  ['a', 'b'],
  ['c', 'd']
]
/* https://leetcode.com/problems/word-search

 */
const exist = function (board, word) {
  const trie = new TrieNode()
  trie.insert(word)
  const res = {val: false}

  for (let i = 0; i < board.length; i++)
    for (let j = 0; j < board[0].length; j++) {
      const visited = new Set()
      dfs(res, board, trie, i, j, visited)
    }

  return res.val
}
function dfs(res, board, trie, r, c, visited) {
  if (r < 0 || c < 0 || r == board.length || c == board[0].length) return
  if (visited.has(`${r}_${c}`) || res.val) return
  if (!trie.children.has(board[r][c])) return

  visited.add(`${r}_${c}`)
  trie = trie.children.get(board[r][c])
  if (trie.isWord) {
    res.val = true
    return
  }

  dfs(res, board, trie, r + 1, c, visited)
  dfs(res, board, trie, r - 1, c, visited)
  dfs(res, board, trie, r, c + 1, visited)
  dfs(res, board, trie, r, c - 1, visited)
  visited.delete(`${r}_${c}`)
}
console.log(exist(matrix, 'cdba'))
