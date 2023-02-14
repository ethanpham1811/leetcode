/* https://leetcode.com/problems/maximum-product-subarray/
their approach O(n)  HARD!!!
- maintain 2 number [min, max]
- multiply these 2 with the current number on every iteration, update [min,max]
- return the max
*/
export const maxProduct = function (nums) {
  let res = Math.max(...nums)
  let min = 1,
    max = 1

  for (const n of nums) {
    if (n === 0) {
      ;(min = 1), (max = 1)
      continue
    }
    ;[min, max] = [Math.min(max * n, min * n, n), Math.max(max * n, min * n, n)]
    res = Math.max(res, max)
  }
  return res
}
console.log(maxProduct([4, 1, -1, 3, -2, 9, -8]))

/* my app
calculate the product of the whole array
- move left till minus sign (while divide the product by the left number)
- move right till minus sign (while divide the product by the right number)
- get max of these two num
 */
export const maxProduct2 = function (nums) {
  if (nums.length === 1) return nums[0]
  let maxProduct = nums.reduce((acc, cur) => acc * cur, 1)
  let l = -1
  let r = nums.length
  let leftProduct = maxProduct
  let rightProduct = maxProduct

  if (maxProduct <= 0) {
    while (nums[l] > 0 || nums[l] === undefined) {
      leftProduct /= nums[l + 1]
      l++
    }
    while (nums[r] > 0 || nums[r] === undefined) {
      rightProduct /= nums[r - 1]
      r--
    }
    return Math.max(leftProduct, rightProduct)
  }
  return maxProduct
}
console.log(maxProduct2([2, 3, -2, 4]))

//-1-1
//-2,2
//-6,6
//-12,12
//-48,48
