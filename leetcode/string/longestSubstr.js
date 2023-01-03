/* https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring
Same as m_longestConsecutive but with tweaks
  - find starting letter
  - count from there, using charCodeAt
*/
const longestContinuousSubstring = function (s) {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    const curCode = s[i].charCodeAt()
    const prevCode = i == 0 ? null : s[i - 1].charCodeAt()

    //find starting letter, compare charCode
    if (prevCode != curCode - 1 || i == 0) {
      let counter = 1
      //check if next letter is valid, increase count
      while (i + counter < s.length && s[i + counter].charCodeAt() - counter == curCode) counter++
      res = Math.max(res, counter)
      i += counter - 1
    }
  }
  return res
}
console.log(longestContinuousSubstring('cbddefghaa'))
