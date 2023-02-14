/* https://leetcode.com/problems/contains-duplicate-iii/
bucket approach O(n)
- put numbers to bucket [0-3][3-6][6-9]....
- if a new number fall in to a preoccupied bucket, return true
- if a new number and another num from adjacent bucket produce difference <= t, return true
- every iteration, move window, remove bucket of first number
 */
const containsNearbyAlmostDuplicate2 = function (nums, k, t) {
  let bucket = {}
  const bSize = t + 1
  for (const element of nums) {
    // get bucket index
    const bIndex = Math.floor(element / bSize)

    // if bucket already has this index
    if (bucket[bIndex]) return true
    // if neighbor bucket & cur bucket difference < bSize
    else if (bucket[bIndex + 1] && Math.abs(element - bucket[bIndex + 1]) < bSize) return true
    else if (bucket[bIndex - 1] && Math.abs(element - bucket[bIndex - 1]) < bSize) return true

    // store cur num to bucket
    bucket[bIndex] = bucket[bIndex] ? [...bucket[bIndex], element] : [element]
    // if (i >= k) delete bucket[Math.floor(nums[i - k] / bSize)] // remove bucket out of range
  }
  return false
}
// console.log(containsNearbyAlmostDuplicate2([1, 2, 3, 1], 3, 1))
console.log(containsNearbyAlmostDuplicate2([1, 5, 9, 1, 3, 9], 2, 3))
