const intervals = [
  [1, 2],
  [1, 2],
  [1, 2]
]
/* https://leetcode.com/problems/non-overlapping-intervals/
 */
const eraseOverlapIntervals = function (arr) {
  let counter = 0
  arr.sort((a, b) => a[0] - b[0])
  let curVal = arr[0][1]
  for (let i = 1; i < arr.length; i++) {
    if (curVal > arr[i][0]) {
      if (curVal > arr[i][1]) curVal = arr[i][1]
      counter++
    } else curVal = arr[i][1]
  }
  return counter
}
console.log(eraseOverlapIntervals(intervals))