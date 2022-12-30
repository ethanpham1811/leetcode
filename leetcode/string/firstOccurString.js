/* 
hashmap aproach
*/
let strStr1 = function (haystack, needle) {
  const map = new Map()
  let returnedIndex = -1

  for (let i = 0; i < needle.length; i++) {
    map.set(i, needle[i])
  }
  // console.log(map)
  for (let i = 0; i < haystack.length; i++) {
    if (map.get(0) === haystack[i]) {
      let index = 1
      returnedIndex = i

      // console.log(i)
      while (map.get(index) === haystack[index + i] && index !== map.size) {
        index++
      }
      // console.log(index);
      if (index < map.size) {
        returnedIndex = -1
      } else {
        return returnedIndex
      }
    }
  }

  return returnedIndex
}

/* 
2 for loop
*/
function strStr2(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      // console.log(haystack[i+j], needle[j], j)
      if (j == needle.length - 1) {
        // console.log('here')
        return i
      }
      if (i + j == haystack.length) return -1
      if (needle[j] != haystack[i + j]) break
    }
  }
}
// console.log(strStr('dsadbutsad', 'sad'))

let Benchmark = require('benchmark')
const suite = new Benchmark.Suite()
const benchmark = (args, ...fns) => {
  fns.forEach((el, i) => {
    suite.add(`function ${i + 1}`, () => {
      el(...args)
    })
  })

  suite
    .on('cycle', (event) => {
      console.log(String(event.target))
    })
    .on('complete', () => {
      console.log('Fastest is ' + suite.filter('fastest').map('name'))
    })
    .run({async: true})
}

benchmark(['1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dsadbutsad', 'sad'], strStr1, strStr2)
