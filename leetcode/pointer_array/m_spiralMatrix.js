const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]
/* https://leetcode.com/problems/spiral-matrix/
This approach is weird
 */
const spiralOrder = function (matrix) {
  const res = []
  while (matrix.length) {
    const first = matrix.shift()
    res.push(...first)
    for (const m of matrix) {
      let val = m.pop()
      if (val) res.push(val)
      m.reverse()
    }
    matrix.reverse()
  }
  return res
}
console.log(spiralOrder(matrix))
