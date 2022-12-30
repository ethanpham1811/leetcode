/**
 *
 * @param {number[]} nums
 * @returns number[]
 * loop and shift non zero number
 * increase index on shifting
 * add zeros to the end
 */
function moveZeroes(nums) {
  let index = 0
  for (let num of nums) {
    if (num != 0) {
      nums[index++] = num
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
}
console.log(moveZeroes([0, 1, 0, 3, 12]))
