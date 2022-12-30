const matrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1]
]
/* https://leetcode.com/problems/set-matrix-zeroes/
This solution is about how to get space complex O(1)
1 1 1 0 1       1 1 1 0 1                           1 1 0 0 1          
1 1 1 1 1       1 1 1 1 1                           1 1 1 1 1 
1 1 0 1 1   =>  1 1 0 1 1  (fristRowIsZero: true)   0 1 0 1 1  (use firstRow & firstCol as Set to store zeroes coordinates)
1 1 1 1 1       1 1 1 1 1                           1 1 1 1 1 
1 1 1 1 1       1 1 1 1 1                           1 1 1 1 1 
 */
function setZeroes(matrix) {
  let firstCol = false
  let firstRow = false
  for (const el of matrix) {
    if (el[0] == 0) {
      firstCol = true
      break
    }
  }
  for (const el of matrix[0]) {
    if (el == 0) {
      firstRow = true
      break
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0
      }
    }
  }
  if (firstCol) for (const el of matrix) el[0] = 0
  if (firstRow) for (let j = 0; j < matrix[0].length; j++) matrix[0][j] = 0
}
/* Naive approach O(m+n) space
  - first loop to find zero coordinates
  - second loop to fill zero base on the coordinates
*/
const setZeroes = function (matrix) {
  const rMap = new Set()
  const cMap = new Set()
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        rMap.add(i)
        cMap.add(j)
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rMap.has(i) || cMap.has(j)) matrix[i][j] = 0
    }
  }
  return matrix
}
console.log(setZeroes(matrix))
