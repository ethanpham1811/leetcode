const interval = [[1, 5]]
/* https://leetcode.com/problems/insert-interval/
 */
const insert = function (arr, newInterval) {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    const newHead = newInterval[0]
    const newTail = newInterval[1]
    const cur = arr[i]
    const curHead = cur[0]
    const curTail = cur[1]

    if (newTail < curHead) {
      // if new is on the left side of cur, push new and add the rest.. short circuit
      res.push(newInterval)
      return [...res, ...arr.slice(i)]
    } else if (newHead > curTail) {
      // if new is on the right side of cur, push the cur, continue
      res.push(cur)
    } else {
      // overlapping case, merge & transform to new Interval
      newInterval = [Math.min(newHead, curHead), Math.max(newTail, curTail)]
    }
  }
  res.push(newInterval)
  return res
}
console.log(insert(interval, [0, 0]))