/* https://leetcode.com/problems/jump-game/
Very clever & intuitive approach
1 1 1 1 2 0 1 0 3
- refuel gas if can reach a station (index of the station + gas of that station) (i+nums[i])
- if gas < station index -> not enough gas, return false, never reach a destination
 */
function canJump(nums) {
  let gas = nums[0]
  // i: station index, nums[i]: gas retored
  for (let i = 1; i < nums.length; i++) {
    if (gas < i) return false
    gas = Math.max(gas, i + nums[i])
  }
  return true
}
console.log(canJump([2, 3, 1, 0, 0, 4]))

/** 
 * 
DFS O(n)
 *
*/
const canJump = function (nums) {
  const res = {val: false}
  const invalids = new Set()
  dfs(nums, res, invalids, 0)
  return res.val
}
function dfs(nums, res, invalids, index) {
  if (index == nums.length - 1) {
    res.val = true
    return
  }
  if (invalids.has(index)) return
  if (nums[index] == 0) {
    invalids.add(index)
    return
  }

  let counter = nums[index]
  while (counter > 0) {
    const next = index + counter
    next < nums.length && dfs(nums, res, invalids, next)
    counter--
  }
  invalids.add(index)
}
console.log(canJump([2, 3, 1, 0, 0, 4]))
