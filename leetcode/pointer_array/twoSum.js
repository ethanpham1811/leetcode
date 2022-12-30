/* Hashmap approach */
function twoSum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]) + 1, i + 1]
    } else {
      map.set(nums[i], i)
    }
  }
}
console.log(twoSum([11, 2, 5, 7], 9))

/* pointer approach 
- left & right 
- reduce right if sum > target
- reduce left if sum < target
- while (left < right)
*/
function twoSum(num, target) {
  let res = Array(2)
  if (num == null || num.length < 2) return res
  let left = 0,
    right = num.length - 1
  while (left < right) {
    // console.log(left, right)
    // console.log(num[left], num[right], 'sum ' + (num[left] + num[right]))
    let v = num[left] + num[right]
    if (v == target) {
      res[0] = left + 1
      res[1] = right + 1
      break
    } else if (v > target) {
      right--
    } else {
      left++
    }
  }
  return res
}
console.log(twoSum([1, 2, 3, 5, 7, 8, 11], 7))
