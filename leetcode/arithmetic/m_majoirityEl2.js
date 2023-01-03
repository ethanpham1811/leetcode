/* Linear time complexity (Boyer Moore)
https://leetcode.com/problems/majority-element-ii
- Same as version 1 but got 2 counter to track of
 */
function majorityElement(nums) {
  if (!nums) return []
  let c1 = 0
  let c2 = 0
  let can1 = null
  let can2 = null

  for (let num of nums) {
    if (num == can1) {
      c1++
    } else if (num == can2) {
      c2++
    } else if (c1 == 0) {
      can1 = num
      c1++
    } else if (c2 == 0) {
      can2 = num
      c2++
    } else {
      c1--
      c2--
    }
  }
  const res = []
  for (const n of [can1, can2]) {
    // console.log(nums.filter((el) => el == n))
    if (nums.filter((el) => el == n).length > Math.floor(nums.length / 3)) res.push(n)
  }
  return res
}
console.log(majorityElement([3, 2]))
