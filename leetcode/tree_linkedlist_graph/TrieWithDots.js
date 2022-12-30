/* https://leetcode.com/problems/design-add-and-search-words-data-structure/
  DFS backtracking
*/
function TrieNode() {
  this.children = new Map()
  this.isWord = false
}
export function Trie() {
  this.tree = new TrieNode()
  // Add
  this.addWord = function (word) {
    let cur = this.tree
    for (const l of word) {
      !cur.children.has(l) && cur.children.set(l, new TrieNode())
      cur = cur.children.get(l)
    }
    cur.isWord = true
    return this.tree
  }
  // Search
  this.search = function (word) {
    const res = {found: false}
    this.dfs(res, word, 0, word.length - 1, this.tree)
    console.log(res.found)
    return res.found
  }
  // DFS
  this.dfs = function (res, word, i, size, node) {
    const l = word[i]
    if (i == size + 1 && node.isWord) {
      res.found = true
      return
    }
    if ((!node.children.has(l) && l !== '.') || i > size) {
      return
    }

    if (l === '.') {
      for (const child of node.children.values()) {
        i++
        this.dfs(res, word, i, size, child)
        i--
      }
      return
    }
    i++
    this.dfs(res, word, i, size, node.children.get(l))
    i--
  }
}
const trie = new Trie()
const wordDictionary = new Trie()
wordDictionary.addWord('bad')
wordDictionary.addWord('dad')
wordDictionary.addWord('mad')
// wordDictionary.search('pad') // return False
wordDictionary.search('bad') // return True
wordDictionary.search('.ad') // return True
wordDictionary.search('b..') // return True
