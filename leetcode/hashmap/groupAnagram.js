import {isAnaGram} from './anagram.js'
/* 
  Hash map
  - loop through every word
  - convert the word (1000100001...)(26 length Array) to get Key for hashmap
  - check if the word is the key anagram (by compare the key with converted word)
  - O(n*n*26)
*/
export const groupAnagrams = (list) => {
  const map = new Map()
  for (const pivot of list) {
    const key = convertToMapKey(pivot)
    if (map.has(key)) {
      map.set(key, [...map.get(key), pivot])
    } else {
      map.set(key, [pivot])
    }
  }
  return Array.from(map.values())
}
const convertToMapKey = (word) => {
  const key = Array(26).fill(0)
  for (let i = 0; i < word.length; i++) {
    key[word.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
  }
  return key.join('-')
}
console.log(groupAnagrams(['bdddddddddd', 'bbbbbbbbbbc']))

/* 
  brute force:
  - loop through every word (i)
  - loop through every word (j) again
  - check isAnaGram to these two words (i,j)
*/
export const groupAnagrams = (list) => {
  const res = []
  for (const pivot of list) {
    const group = []
    for (const word of list) {
      isAnaGram(pivot, word) && group.push(word)
    }
    res.push(group)
  }
  return res
}
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
