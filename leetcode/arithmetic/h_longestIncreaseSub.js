/* https://leetcode.com/problems/longest-increasing-subsequence/description/
DP O(1/2.n2)
key: don't consider smaller following num
- Same as coinChange, SUBPROBLEM, buildup BOTTOMUP from 7
- [1, 2, 5, 3, 4] get LIS(4)
- then LIS(3) = Max(1, LIS(4)) (4>3)
- then LIS(5) = Max(1) (3,4 < 5)
- then LIS(2) = Max(1, LIS(5), LIS(3), LIS(4)) 
 */
let lengthOfLIS = function (nums) {
  const map = new Map()
  const totalNum = nums.length
  let res = 0
  let count = totalNum
  while (count >= 0) {
    let subsequents
    if (count != totalNum) {
      //consider all the subsequent bigger number, discard all smaller
      subsequents = nums.slice(count).filter((el) => el > nums[count])
    } else {
      subsequents = []
    }

    let maxLength = 1
    for (const sub of subsequents) {
      // get max from those subsequent nums + 1 (itself)
      maxLength = Math.max(maxLength, 1 + map.get(sub))
    }
    res = Math.max(res, maxLength)
    map.set(nums[count], maxLength)
    count--
  }
  console.log(map)

  return res
}
console.log(lengthOfLIS([1, 2, 6, 5, 3, 4]))

/* another js solution Iteration (hard to come up)*/
let lengthOfLIS3 = function (nums) {
  if (!nums || nums.length === 0) return 0
  let max = []
  max[0] = null
  max[1] = nums[0]
  for (let i = 1; i <= nums.length; i++) {
    let n = nums[i - 1]
    max[1] = n < max[1] ? n : max[1]
    for (let j = 2; j < max.length; j++) {
      if (max[j - 1] < n && n < max[j]) max[j] = n
    }
    if (max[max.length - 1] < n) max.push(n)
  }
  return max.length - 1
}
console.log(lengthOfLIS3([1, 2, 5, 3, 4]))

/* DFS binary O(nlogn)
Patience sorting (hard to come up solution)
*/
function lengthOfLIS2(nums) {
  let tails = Array(nums.length).fill(Infinity)
  let size = 0
  for (let n of nums) {
    let i = 0,
      j = size
    while (i != j) {
      let m = Math.floor((i + j) / 2)
      if (tails[m] < n) i = m + 1
      else j = m
    }
    tails[i] = n
    if (i == size) ++size
  }
  return size
}
console.log(lengthOfLIS2([1, 2, 5, 3, 4]))
