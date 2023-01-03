/* O(logn) */
function majorityElement1(list) {
  return list.sort((a, b) => a - b)[list.length / 2]
}

/* Linear time complexity Boyer Moore
- loop through list
- set result = first
- increase count if find duplicate, decrease count if not duplicate
- change result to the current if count = 0
 */
function majorityElement(nums) {
  let count = 0
  let candidate = null

  for (let num of nums) {
    if (count == 0) candidate = num

    count += num == candidate ? 1 : -1
    console.log(candidate, count)
  }

  return candidate
}
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))

/* my approach */
function majorityElement2(list) {
  const map = new Map()
  for (const i of list) {
    if (map.has(i)) {
      if (map.get(i) >= list.length / 2) {
        return i
      }
      map.set(i, map.get(i) + 1)
    } else {
      map.set(i, 1)
    }
  }
  return Array.from(map).reduce((acc, curr) => {
    if (curr[1] > acc[1]) {
      return curr
    } else {
      return acc
    }
  })
}

const array = [2, 3, 2, 3, 3, 3, 2, 3]

/* benchmarking!!!!!!!!!!!!!!!!!!! */
let Benchmark = require('benchmark')
const suite = new Benchmark.Suite()
const benchmark = (args, ...fns) => {
  fns.forEach((el, i) => {
    suite.add(`function ${i + 1}`, () => {
      el(args)
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

benchmark(array, majorityElement1, majorityElement2)

/* bitwise solution
- shift to get 1,2,4,8,16...
- compare with list, 1 & [0], 1 & [1]...
*/
function majorityElement(nums) {
  let n = nums.length
  let majority_element = 0
  for (let i = 0; i < 32; i++) {
    let bit = 1 << i
    // Count how many numbers have this bit set.
    let bit_count = 0
    for (let num of nums) {
      if ((num & bit) != 0) {
        bit_count++
      }
    }
    // If this bit is present in more than n / 2 elements
    // then it must be set in the majority element.
    if (bit_count > Math.floor(n / 2)) {
      majority_element = majority_element | bit
    }
  }
  return majority_element
}
console.log(majorityElement([1, 3, 3, 1, 3, 3, 2, 3]))
