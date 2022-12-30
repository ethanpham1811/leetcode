const matrix = [
  [1, 5, 9],
  [8, 11, 13],
  [7, 13, 15]
]
/* https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
  push el to MaxHeap, up to k
  O(m.n.log)
  - Use left, right pointers, find mid value
  - each iteration: count how many el <= mid
  - if count >= k: right--
  - if count < k: left++
*/
let m, n
const kthSmallest = function (matrix, k) {
  m = matrix.length
  n = matrix[0].length // For general, the matrix need not be a square
  let left = matrix[0][0]
  let right = matrix[m - 1][n - 1]
  let ans = -1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (countLessOrEqual(matrix, mid) >= k) {
      ans = mid
      right = mid - 1 // try to looking for a smaller value in the left side
    } else left = mid + 1 // try to looking for a bigger value in the right side
  }
  return ans
}
const countLessOrEqual = function (matrix, x) {
  let counter = 0
  let c = n - 1 // start with the rightmost column
  for (let r = 0; r < m; ++r) {
    while (c >= 0 && matrix[r][c] > x) --c // decrease column until matrix[r][c] <= x
    counter += c + 1
  }
  return counter
}
console.log(kthSmallest(matrix, 8))
