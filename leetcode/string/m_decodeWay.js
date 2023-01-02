function fib(nth) {
  if (nth == 1) return 0
  if (nth == 2) return 1
  let first = 0
  let second = 1
  let counter = 2
  let res = 0

  while (counter < nth) {
    res = first + second
    ;[first, second] = [second, res]
    counter++
  }
  return res
}
/* https://leetcode.com/problems/decode-ways/
 */

const numDecodings = function (s) {
  let res = 1
  let stop = 0
  for (let i = 0; i < s.length; i++) {
    if (i + 1 == s.length || parseInt(s[i] + s[i + 1]) > 26) {
      res *= fib(i - stop + 3)
      stop = i + 1
    } else if (s[i] == '0') {
      if (s[i - 1] == '1' || s[i - 1] == '2') {
        res *= fib(i - 1 - stop + 3)
        stop = i + 1
      } else {
        return 0
      }
    }
  }
  return res
}
console.log(numDecodings('22102'))
