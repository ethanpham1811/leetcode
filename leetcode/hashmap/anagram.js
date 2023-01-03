/*  https://leetcode.com/problems/valid-anagram/description/
Best Solution 
  Time: O(m+n) Space: O(26)
  - convert two word to a key map string (0-1-1-0-0-0-1-...) (26 length str)
  - compare these two key 
*/
export const isAnaGram = function (first, second) {
  return convertToMapKey(first) === convertToMapKey(second)
}
const convertToMapKey = function (word) {
  const key = Array(26).fill(0)
  for (let i = 0; i < word.length; i++) {
    key[word.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
  }
  return key.join('-')
}
// console.log(isAnaGram('anamgra', 'nagaram'))

/*
  O(n*2+m)
  - convert two word to 2 map
  - compare these two map 
*/
export const isAnaGram0 = function (first, second) {
  const dict1 = {}
  const dict2 = {}
  let res = true
  for (const l of first) {
    dict1[l] = dict1[l] + 1 || 1
  }
  for (const l of second) {
    dict2[l] = dict2[l] + 1 || 1
  }
  for (let i in dict1) {
    if (dict1[i] !== dict2[i]) res = false
  }
  console.log(dict1, dict2)
  return res
}
// console.log(isAnaGram0('anamgra', 'nagaram'))

/* 
  O(m+2n) faster above, need only 1 map
  loop first string +1 to map
  loop second string -1 to map
  loop map -> return false if any key != 0
*/
export const isAnaGram2 = function (first, second) {
  const map = new Map()
  for (const i of first) map.set(i, map.get(i) + 1 || 1)

  for (const i of second) {
    if (map.get(i)) {
      map.set(i, map.get(i) - 1)
    } else {
      return false
    }
  }
  for (const i of Array.from(map)) {
    if (i[1] !== 0) return false
  }
  return true
}
// console.log(isAnaGram2('anamgraanamgra', 'nagaramnagaram'))

/* benchmarking!!!!!!!!!!!!!!!!!!! */
// let Benchmark = require('benchmark')
// import Benchmark from 'benchmark'
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

// benchmark(['anamgra', 'nagaram'], isAnaGram0, isAnaGram1, isAnaGram2)
