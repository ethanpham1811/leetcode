/* 
Sliding window technique
- shift left till no duplicated letter in the substring
*/
let lengthOfLongestSubstring = function (str) {
  const set = new Set()
  let l = 0
  let res = 0
  for (let r = 0; r < str.length; r++) {
    while (set.has(str[r])) {
      set.delete(str[l])
      l++
    }
    set.add(str[r])
    res = Math.max(res, r - l + 1)
  }
  return res
}
console.log(lengthOfLongestSubstring('abcbacbb'))
