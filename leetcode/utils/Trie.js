function TrieNode() {
  this.children = new Map()
  this.isWord = false
}
export function Trie() {
  this.tree = new TrieNode()
  this.insert = function (word) {
    let cur = this.tree

    for (const l of word) {
      !cur.children.has(l) && cur.children.set(l, new TrieNode())
      cur = cur.children.get(l)
    }
    cur.isWord = true
    return this.tree
  }
  this.search = function (word) {
    let cur = this.tree
    for (const l of word) {
      if (!cur.children.has(l)) return false
      else cur = cur.children.get(l)
    }
    return cur.isWord
  }
  this.startsWith = function (prefix) {
    let cur = this.tree
    for (const l of prefix) {
      if (!cur.children.has(l)) return false
      else cur = cur.children.get(l)
    }
    return true
  }
}
const trie = new Trie()
// trie.insert('apple')
// trie.search('apple') // return True
// trie.search('app') // return False
// trie.startsWith('app') // return True
// trie.insert('app')
// trie.search('app')
// console.log(trie.tree)
