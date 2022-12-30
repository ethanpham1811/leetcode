/* 
  two pointers for each array1
  - while pointer < length of array -> increase the lower pointer 
*/
let intersect = function (nums1, nums2) {
  const array1 = nums1.sort((a, b) => a - b)
  const array2 = nums2.sort((a, b) => a - b)
  let p1 = 0
  let p2 = 0
  const res = []

  while (p1 < array1.length && p2 < array2.length) {
    if (array1[p1] < array2[p2]) {
      p1++
    } else if (array1[p1] > array2[p2]) {
      p2++
    } else {
      res.push(array1[p1])
      p1++
      p2++
    }
  }
  return res
}
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
