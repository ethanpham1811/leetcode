/* POINTERS SOLUTION */
const threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b)

  let curSum = 0
  let curDiff = Infinity

  for (let i = 0; i < nums.length; i++) {
    let p1 = i + 1
    let p2 = nums.length - 1

    while (p1 < p2) {
      const sum = nums[i] + nums[p1] + nums[p2]
      const diff = Math.abs(sum - target)
      if (diff < curDiff) {
        curDiff = diff
        curSum = sum
      }
      if (sum < target) p1++
      if (sum > target) p2--
      if (curSum == target) break
    }
  }
  return curSum
}
console.log(threeSumClosest([-1, 2, 1, -4], 2))

/* DFS */
const threeSumClosest = function (nums, target) {
  const combi = []
  const closest = {val: Infinity, sum: Infinity}
  const escape = {val: false}

  for (let i = 0; i < nums.length; i++) dfs(nums, i, combi, target, closest, escape)

  return closest.sum
}

function dfs(nums, i, combi, target, closest, escape) {
  if (escape.val) return
  if (combi.length === 3) {
    const sum = combi.reduce((p, c) => p + c)
    const diff = Math.abs(sum - target)
    if (diff < closest.val) {
      closest.sum = sum
      closest.val = diff
    }
    if (diff === 0) escape.val = true
    return
  }

  for (let j = i; j < nums.length; j++) {
    combi.push(nums[j])
    dfs(nums, j + 1, combi, target, closest, escape)
    combi.pop()
  }
}
console.log(threeSumClosest([-1, 2, 1, -4], 2))
