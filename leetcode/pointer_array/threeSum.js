/* https://leetcode.com/problems/3sum/
- sort the array
- loop through the array, skip duplicates (check cur != prev)
- for every num in the array: ex: 3 + ? + ? = 0 -> find ? ? from twoSum([...], -3)
*/
const threeSum = function (nums) {
  const sorted = nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue

    let left = i + 1
    let right = sorted.length - 1
    let sum
    // two sum
    while (left < right) {
      sum = sorted[i] + sorted[left] + sorted[right]
      if (sum === 0) {
        res.push([sorted[i], sorted[left], sorted[right]])
        left++
        while (sorted[left] === sorted[left - 1] && left < right) left++
      } else if (sum > 0) right--
      else left++
    }
  }
  return res
}
console.log(threeSum([0, -4, -1, -4, -2, -3, 2])) //-4,-4,-3,-2,-1,0,2
// console.log(threeSum([0, 0, 0, 0]))
// console.log(threeSum([-4, -1, -1, 0, 1, 2]))

/* brute force
- triple loop
- sort array first
- ignore the next same value
*/
// const threeSum = function (nums) {
//   let res = []
//   const length = nums.length
//   const sorted = nums.sort((a, b) => a - b)
//   let last1, last2, last3
//   for (let i = 0; i < length - 2; i++) {
//     if (sorted[i] === last1) continue
//     last1 = sorted[i]

//     for (let j = i + 1; j < length - 1; j++) {
//       if (sorted[j] === last2) continue
//       last2 = sorted[j]
//       // console.log('last 2 ' + last2)

//       for (let k = j + 1; k < length; k++) {
//         if (sorted[k] === last3) continue
//         last3 = sorted[k]
//         // console.log('last 3 ' + last3)

//         // console.log(i, j, k, sorted)
//         if (sorted[i] + sorted[j] + sorted[k] === 0) {
//           const temp = [sorted[i], sorted[j], sorted[k]]
//           res.push(temp)
//         }
//       }
//       last3 = null
//     }
//     last2 = null
//   }

//   return res
// }
// console.log(threeSum([-1, -1, 0, 1]))
