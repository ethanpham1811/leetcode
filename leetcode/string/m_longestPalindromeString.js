/* https://leetcode.com/problems/longest-palindromic-substring/
same as palinedrome sub string except for returning the longest one 
- O(n2)
- with every letter, try expand outward (left-1, right+1) and update curMax
*/
const longestPalindrome = function (str) {
  let max = ''
  for (let i = 0; i < str.length; i++) {
    const max1 = countParli(str, i, i)
    const max2 = countParli(str, i, i + 1)
    const internalMax = max1.length > max2.length ? max1 : max2
    max = internalMax.length > max.length ? internalMax : max
  }
  return max
}
const countParli = function (s, l, r) {
  let max = ''
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    max = s.slice(l, r + 1)
    l--
    r++
  }
  return max
}
console.log(longestPalindrome('aacbbc'))
