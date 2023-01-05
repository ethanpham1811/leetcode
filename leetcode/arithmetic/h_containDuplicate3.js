/* https://leetcode.com/problems/contains-duplicate-iii/
FIXME:
bucket
 */
const containsNearbyAlmostDuplicate = function (nums, iD, vD) {
  if (vD < 0) return false
  const n = nums.length
  const map = new Map()
  let bucketSize = vD + 1
  for (let i = 0; i < n; i++) {
    let m = getID(nums[i], bucketSize)
    if (map.has(m)) return true
    if (map.has(m - 1) && Math.abs(nums[i] - map[m - 1]) < bucketSize) return true
    if (map.has(m + 1) && Math.abs(nums[i] - map[m + 1]) < bucketSize) return true
    map[m] = nums[i]
    if (i >= iD) map.delete(getID(nums[i - vD], bucketSize))
  }
  return false
}
function getID(num, bucketSize) {
  return num < 0 ? (num + 1) / bucketSize - 1 : num / bucketSize
}
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0))
