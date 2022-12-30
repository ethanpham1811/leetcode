/* 
two pointers
increase left if left is smaller
increase right if right is smaller
*/
let maxArea = function (rows) {
  let res = 0
  let left = 0
  let right = rows.length - 1
  while (left < right) {
    const area = (right - left) * Math.min(rows[right], rows[left])
    if (area > res) {
      res = area
    }
    if (rows[left] > rows[right]) {
      right--
    } else {
      left++
    }
  }
  return res
}
console.log(maxArea([4, 12, 6, 100, 90, 8, 14]))
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
