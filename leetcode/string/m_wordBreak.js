/* https://leetcode.com/problems/word-break/
Bottom up DP solution
- check every letter from bottom up with dict
- record status of everyletter (true/false)
- the precedence letter status =  map.get(curIndex + curLetter.length)
*/
let wordBreak = function (s, dict) {
  const map = new Map()
  map.set(s.length, true)
  let index = s.length - 1
  while (index >= 0) {
    let match
    wordLoop: for (const word of dict) {
      let isMatch = true
      // check current letter and after with every words
      for (let i = 0; i < word.length; i++) {
        if (word[i] != s[index + i]) {
          // found mismatch!
          isMatch = false
        }
      }
      // get the match if there is a match
      if (isMatch) {
        match = map.get(index + word.length) ? word : null
        if (match) break wordLoop
      }
    }
    // set true fall in map for every letter
    map.set(index, match ? map.get(index + match.length) : false)
    index--
  }
  return map
}
console.log(wordBreak('cars', ['car', 'ca', 'rs']))
// console.log(wordBreak('catsandog', ["cats","dog","sand","and","cat"]))
// console.log(wordBreak('ccbb', ['bc', 'cb']))
// console.log(wordBreak('abcd', ['a', 'abc', 'b', 'cd']))
// console.log(wordBreak('neetcode', ['neet', 'leet', 'code']))
// console.log(wordBreak('aaaaabbb', ['bbb', 'aaa', 'aa']))
// console.log(wordBreak('aaaaaaa', ['aaaa', 'aaa']))
// console.log(wordBreak('applepenapple', ['apple', 'pen']))

/* Brute force O(n.n.m) very slow
- 1st loop through every word
- 2nd loop+loop+loop.. through letters of words that match (could be multiple)
- if any word success, pass the result up to the root
*/
let wordBreak2 = function (s, dict) {
  return recur(0, s, dict)
}
function recur(index, s, dict) {
  const res = []
  wordLoop: for (const word of dict) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] != s[index + i]) {
        continue wordLoop
      }
    }
    if (index + word.length == s.length) {
      return true
    } else {
      res.push(recur(index + word.length, s, dict))
    }
  }
  return res.indexOf(true) != -1 ? true : false
}
// console.log(wordBreak2('cars', ['car', 'ca', 'rs']))
// console.log(wordBreak2('aaaaaaa', ['aaaa', 'aaa']))
// console.log(wordBreak2('applepenapple', ['apple', 'pen']))
console.log(wordBreak2('aabbb', ['bbb', 'aaaa', 'aa']))
