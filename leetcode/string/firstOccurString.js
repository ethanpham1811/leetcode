/* https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
2 for loop O(n2)
*/
let strStr2 = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      let found = true
      for (let j = 0; j < needle.length; j++) {
        if (haystack[j + i] != needle[j]) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }
  return -1
}
// console.log(strStr('dsadbutsad', 'sad'))

// let Benchmark = require('benchmark')
// const suite = new Benchmark.Suite()
// const benchmark = (args, ...fns) => {
//   fns.forEach((el, i) => {
//     suite.add(`function ${i + 1}`, () => {
//       el(...args)
//     })
//   })

//   suite
//     .on('cycle', (event) => {
//       console.log(String(event.target))
//     })
//     .on('complete', () => {
//       console.log('Fastest is ' + suite.filter('fastest').map('name'))
//     })
//     .run({async: true})
// }

// benchmark(['1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dsadbutsad', 'sad'], strStr1, strStr2)
