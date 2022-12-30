/* https://leetcode.com/problems/word-search-ii/
  DFS backtracking
*/
function TrieNode() {
  this.children = new Map()
  this.isWord = false

  this.addWord = function (word) {
    let cur = this
    for (const l of word) {
      !cur.children.has(l) && cur.children.set(l, new TrieNode())
      cur = cur.children.get(l)
    }
    cur.isWord = true
  }
}
let findWords = function (board, words) {
  const trie = new TrieNode()
  const res = []
  const ROWS = board.length
  const COLS = board[0].length
  for (const w of words) {
    trie.addWord(w)
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const visited = new Set()
      dfs(visited, res, board, '', trie, r, c)
    }
  }
  return res
}
function dfs(visited, res, board, com, node, r, c) {
  if (r < 0 || c < 0 || r == board.length || c == board[0].length) return

  if (visited.has(`${r}${c}`) || !node.children.has(board[r][c])) return

  visited.add(`${r}${c}`)
  com += board[r][c]
  node = node.children.get(board[r][c])
  if (node.isWord) res.indexOf(com) == -1 && res.push(com)

  dfs(visited, res, board, com, node, r, c + 1)
  dfs(visited, res, board, com, node, r + 1, c)
  dfs(visited, res, board, com, node, r - 1, c)
  dfs(visited, res, board, com, node, r, c - 1)
  visited.delete(`${r}${c}`)
}
console.log(
  findWords(
    [
      ['h', 'k'],
      ['f', 'l']
    ],
    ['hklf', 'hf']
  )
)
