/* https://leetcode.com/problems/top-k-frequent-elements
return most frequent number in the array
BUCKET SORT -> use array to store frequency from 1-nums.length
 */
let topKFrequent = function (nums, k) {
  const freq = Array(nums.length + 1).fill([])
  const map = new Map()
  for (const n of nums) {
    if (map.has(n)) map.set(n, map.get(n) + 1)
    else map.set(n, 1)
  }
  for (const pair of map) freq[pair[1]] = [...freq[pair[1]], pair[0]]

  let index = nums.length
  let res = []
  console.log(freq)
  while (res.length <= k && index >= 0) {
    if (freq[index].length > 0) res = [...res, ...freq[index]]
    index--
  }
  return res.slice(0, k)
}
console.log(topKFrequent([1], 1))
