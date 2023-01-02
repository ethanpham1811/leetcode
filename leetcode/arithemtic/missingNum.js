/**
 *
 * @param {number[]} nums
 * @returns number
 * bigest*(biggest+1)/2
 */
function missingNumber(nums) {
  let sum = 0
  const total = (nums.length * (nums.length + 1)) / 2
  for (const n of nums) sum += n

  return total - sum
}
console.log(missingNumber([0, 3, 2]))
