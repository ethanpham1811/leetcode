const intervals = [
  [1, 4],
  [0, 0]
]
/* https://leetcode.com/problems/merge-intervals/
 */
const merge = function (arr) {
  // O(nlogn)
  arr.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][1] >= arr[i + 1][0]) {
      arr[i][0] = Math.min(arr[i][0], arr[i + 1][0])
      arr[i][1] = Math.max(arr[i][1], arr[i + 1][1])
      arr.splice(i + 1, 1)
      i--
    }
  }
  return arr
}
console.log(merge(intervals))
