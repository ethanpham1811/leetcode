/* 
binary search [5, 6, 7, 8, 3, 4], 5
- find mid
- check 2 cases: left portion > right portion & vice versa
- set hi = mid if target belong to left portion
- set lo = mid if target belong to right portion
*/
function search(array, target) {
  let l = 0
  let r = array.length - 1

  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    if (array[m] == target) return m

    // if left portion is bigger than right
    if (array[m] >= array[l]) {
      if (target > array[m] || target < array[l]) l = m + 1
      else r = m - 1
    } else {
      // if right portion is bigger than left
      if (target < array[m] || target > array[r]) r = m - 1
      else l = m + 1
    }
  }
  return -1
}
console.log(search([3, 4, 5, 6, 7, 0, 1, 2], 1))

/* 
binary search [5, 6, 7, 8, 3, 4], 5
- find the Pivot!! by keep comparing mid with hi lo
- set hi = mid if mid < hi 
- set lo = mid if mid > hi
*/
function search(array, target) {
  let lo = 0
  let n = array.length
  let hi = n - 1
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2)
    if (array[mid] > array[hi]) lo = mid + 1
    else hi = mid
  }
  const pivotIndex = lo

  lo = 0
  hi = n - 1
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2)
    let realmid = (mid + pivotIndex) % n
    console.log(mid, pivotIndex, realmid)
    if (array[realmid] == target) return realmid
    if (array[realmid] < target) lo = mid + 1
    else hi = mid - 1
  }
  return -1
}
console.log(search([3, 4, 5, 6, 7, 0, 1, 2], 4))
