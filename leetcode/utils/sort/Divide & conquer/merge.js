/* Push the i element to its proper position among the already sorted
- Faster than all with the tradeoffs of space
- Best for big scale data sorting
- use Array SLICING
  Time: nlogn for all
  Space: O(n) (out of place, use auxiliary array)
  STABLE
*/
function merge(left, right) {
  const lL = left.length
  const rL = right.length
  const sortedArr = Array(lL + rL)
  let pL = 0
  let pR = 0
  let p = 0
  while (pL < lL && pR < rL) {
    if (left[pL] < right[pR]) {
      sortedArr[p] = left[pL]
      pL++
    } else {
      sortedArr[p] = right[pR]
      pR++
    }
    p++
  }
  let pRes = pL == lL ? pR : pL
  // Iterate through the residual & put it at the end of sortedArr
  for (; pRes < (pL == lL ? rL : lL); pRes++, p++) sortedArr[p] = pL == lL ? right[pRes] : left[pRes]
  return sortedArr
}

export function mergeSort(arr) {
  // Base case
  if (arr.length == 1) return arr

  let mid = Math.floor(arr.length / 2)
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}
console.log(mergeSort([3, 5, 8, 5, 99, 1]))
