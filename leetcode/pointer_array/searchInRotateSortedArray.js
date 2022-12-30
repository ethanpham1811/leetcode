/* 
binary search
- find the Pivot!! by keep comparing mid with hi lo
- set hi = mid if mid < hi 
- set lo = mid if mid > hi
*/
function search(array, target) {
  let lo = 0
  let n = array.length
  let hi = n - 1
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2)
    if (array[mid] > array[hi]) lo = mid + 1
    else hi = mid
  }
  const pivot = lo

  if (target <= array[n - 1]) {
    return pivot + target - array[pivot]
  } else {
    return pivot - (n + pivot - 1 - target) + 1
  }

  // lo = 0
  // hi = n - 1
  // while (lo <= hi) {
  //   let mid = Math.floor((lo + hi) / 2)
  //   let realmid = (mid + pivotIndex) % n
  //   console.log(mid, pivotIndex, realmid)
  //   if (array[realmid] == target) return realmid
  //   if (array[realmid] < target) lo = mid + 1
  //   else hi = mid - 1
  // }
  // return -1
}
console.log(search([5, 6, 7, 8, 3, 4], 5))

/* my approach */
// let search = function (nums, target) {
//   const level = {val: 1, lock: false}
//   split(nums, level)
//   console.log('final level ' + level.val)
//   if (level.val < nums.length) {
//     // console.log('res'+level.val);
//     if (target <= nums[nums.length - 1]) {
//       return level.val + target - nums[level.val]
//     } else {
//       // console.log(level.val, nums.length, target);
//       return level.val - (nums.length + level.val - target)
//     }
//   } else {
//     return -1
//   }
// }
// function split(nums, level) {
//   if (nums.length <= 2) {
//     console.log(nums)
//     if (nums[0] > nums[1]) {
//       console.log('lock')
//       level.val = level.val + 1
//       level.lock = true
//     }
//     return nums
//   }
//   if (!level.lock) {
//     level.val = level.val + 1
//   }
//   const left = split(nums.slice(0, Math.ceil(nums.length / 2)), level)
//   const right = split(nums.slice(Math.ceil(nums.length / 2)), level)
//   console.log(nums, level, left, right)

//   if (left[left.length - 1] > right[0]) {
//     level.val = level.val + 1
//     level.lock = true
//   }
//   return [...left, ...right]
// }
// console.log(search([5, 6, 7, 8, 3, 4], 7))
