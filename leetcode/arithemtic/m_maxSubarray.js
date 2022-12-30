/* O(n) iteration solution
- add curr num to sum
- discard the negative sum from the left
 */
export const maxSubArray1 = function (nums) {
  let max = nums[0]
  let tempSum = nums[0]

  for (let r = 1; r < nums.length; r++) {
    if (tempSum < 0) tempSum = nums[r]
    else tempSum += nums[r]

    max = Math.max(tempSum, max)
  }
  return max
}
console.log(maxSubArray1([-2, 1, -9, 4, -1, 2, 1, -5, 4]))

/* n2 approach (not finished)
- 2 loops
- count the sum by adding new val to prev sum
 */
const maxSubArray2 = function (nums) {
  let max = {val: nums[0], l: 0, r: 0}

  for (let i = 0; i < nums.length; i++) {
    const curMax = {val: nums[i], l: i, r: i}
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + curMax.val > curMax.val) {
        curMax.val = nums[j] + curMax.val
        curMax.l = i
        curMax.r = j
      }
    }
    if (curMax.val > max.val) {
      max.val = curMax.val
      max.l = curMax.l
      max.r = curMax.r
    }
  }
  return max.val
}
// console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

/* sliding window: n3
- move right til find better res
- move left till right, rollback to where better res is
*/
const maxSubArray3 = function (nums) {
  let max = {val: -Infinity, l: 0, r: 0}
  let l = 0

  for (let r = 0; r < nums.length; r++) {
    let tempL = l
    while (tempL <= r) {
      const tempSum = getSum(nums, tempL, r)
      if (tempSum > max.val) {
        l = tempSum > max.val ? tempL : l
        ;(max.val = tempSum), (max.l = l), (max.r = r)
      }

      tempL++
    }
  }
  return getSum(nums, max.l, max.r)
}

/* utils fn */
function getSum(array, l, r) {
  return array.slice(l, r + 1).reduce((acc, cur) => acc + cur)
}
// console.log(maxSubArray3([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
