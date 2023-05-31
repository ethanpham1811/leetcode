/* https://leetcode.com/problems/next-permutation
  Find the break point (where i < i+1)
  - if break point exist:
    + look for the right from the break point, find the smallest num
    + swap that num with the break point
    + sort right part ascending order
  - if break point doesn't exist: the array is already sorted descending, just revert it
*/
const nextPermutation = function (nums) {
  let p = null
  for (let i = nums.length - 1; i >= 0; i--) if (nums[i] < nums[i + 1]) p = i

  if (!p) return nums.reverse()

  const smallest = {diff: Infinity, index: null}
  for (let i = p + 1; i < nums.length; i++) {
    const diff = nums[i] - nums[p]
    if (diff < smallest.diff && diff >= 0) {
      smallest.diff = diff
      smallest.index = i
    }
  }
  ;[nums[p], nums[smallest.index]] = [nums[smallest.index], nums[p]]

  const sortedRight = nums.slice(p + 1).sort((a, b) => a - b)

  for (let i = 0; i < sortedRight.length; i++) nums[p + 1 + i] = sortedRight[i]

  return nums
}

console.log(nextPermutation([1, 2, 3]))
// console.log(nextPermutation([2, 1, 5, 4, 3, 0, 0]))

//2,3,0,0,1,4,5
