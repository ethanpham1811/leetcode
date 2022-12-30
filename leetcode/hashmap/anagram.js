/* 
  O(n*2+m) Fastest!!!!
  - convert two word to a key map (0110001...) (26 length str)
  - compare these two key 
*/
export const isAnaGram0 = function (first, second) {
  const dict1 = {}
  const dict2 = {}
  let res = true
  for (let i = 0; i < first.length; i++) {
    dict1[first[i]] = dict1[first[i]] ? dict1[first[i]] + 1 : 1
  }
  for (let i = 0; i < second.length; i++) {
    dict2[second[i]] = dict2[second[i]] ? dict2[second[i]] + 1 : 1
  }
  for (let i in dict1) {
    if (dict1[i] !== dict2[i]) res = false
  }
  console.log(dict1)
  return res
}
console.log(isAnaGram0('anamgra', 'nagaram'))

/* 
  O(n*26) 
  - convert two word to a key map (0110001...) (26 length str)
  - compare these two key 
*/
export const isAnaGram1 = function (first, second) {
  return convertToMapKey(first) === convertToMapKey(second)
}
const convertToMapKey = function (word) {
  const key = Array(26).fill(0)
  for (let i = 0; i < word.length; i++) {
    key[word.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
  }
  return key.join('-')
}
console.log(isAnaGram1('anamgra', 'nagaram'))

/* 
  O(m+2n) faster above
  loop first string +1 to map
  loop second string -1 to map
  loop map -> return !0 ? false : true 
*/
export const isAnaGram2 = function (first, second) {
  const map = new Map()
  for (const i of first) {
    map.get(i) ? map.set(i, map.get(i) + 1) : map.set(i, 1)
  }
  for (const i of second) {
    if (map.get(i)) {
      map.set(i, map.get(i) - 1)
    } else {
      return false
    }
  }
  for (const i of Array.from(map)) {
    if (i[1] !== 0) {
      return false
    }
  }
  return true
}
console.log(isAnaGram2('anamgraanamgra', 'nagaramnagaram'))

/* benchmarking!!!!!!!!!!!!!!!!!!! */
// let Benchmark = require('benchmark')
import Benchmark from 'benchmark'
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

benchmark(['anamgra', 'nagaram'], isAnaGram0, isAnaGram1, isAnaGram2)
