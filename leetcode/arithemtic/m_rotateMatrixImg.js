/* https://leetcode.com/problems/rotate-image/
  time: O(n/2.n) space: O(1) alter in place
  - outter loop for layers
  - inner loop for value change
  - each inner loop make changes 4 times with 1 temp var
  - enclose the layer down to the core of the matrix every iteration
 */
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]
const rotate = function (matrix) {
  let start = 0
  let end = matrix.length - 1
  while (start < end) {
    for (let i = 0; i < end - start; i++) {
      const top = start
      const left = start
      const bottom = end
      const right = end
      const topLeft = matrix[top][left + i]

      matrix[top][left + i] = matrix[bottom - i][left]
      matrix[bottom - i][left] = matrix[bottom][right - i]
      matrix[bottom][right - i] = matrix[top + i][right]
      matrix[top + i][right] = topLeft
    }
    start++
    end--
  }
  return matrix
}
console.log(rotate(matrix))

// const matrix = [
//   [16, 2, 3, 13],
//   [5, 2, 3, 8],
//   [9, 3, 2, 12],
//   [1, 14, 15, 1]
// ]
