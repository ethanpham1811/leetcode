/* https://leetcode.com/problems/longest-consecutive-sequence/
  - loop through nums
  - check if cur-1 & cur+1 is in the list
  - if not, delete the cur
  - return size of the remaining list
*/
const longestConsecutive = function (nums) {
  const askList = new Set(nums)
  for (const n of nums) if (!askList.has(n - 1) && !askList.has(n + 1)) askList.delete(n)

  return askList.size
}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

/* Leetcode solution, BETTER!
  - loop through, find the start number
*/
const longestConsecutive2 = function (nums) {
  let res = 0
  const askList = new Set(nums)
  // check if the cur is the start num in the sequence
  for (let n of nums)
    if (!askList.has(n - 1)) {
      let count = 0
      // start counting on while increase curval by 1
      while (askList.has(n++)) count++
      res = Math.max(res, count)
    }

  return res
}
console.log(longestConsecutive2([100, 4, 200, 1, 3, 2]))
