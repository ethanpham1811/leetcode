/* same as palinedrome sub string except for returning the longest one */
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
    const str = s.slice(l, r + 1)
    max = str.length > max.length ? str : max.length
    l--
    r++
  }
  return max
}
console.log(longestPalindrome('cbbd'))
