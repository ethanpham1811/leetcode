/* 4 sum, not solved, this is from internet */

function binary_search(arr, target, L = 0, R = arr.length - 1) {
  while (L < R) {
    let mid = ~~(L / 2 + R / 2)
    arr[mid] < target ? (L = mid + 1) : (R = mid)
  }
  return L === R && arr[L] === target ? L : -Infinity
}
const fourSum = function (a, t) {
  let n = a.length

  a.sort((a, b) => a - b)

  // L + R + L2 + R2 = t
  let aa = []
  for (let L = 0; L < n; L++) {
    if (L > 0 && a[L - 1] === a[L]) continue

    for (let R = L + 1; R < n; R++) {
      if (R > L + 1 && a[R - 1] === a[R]) continue
      let sum1 = a[L] + a[R] - t
      for (let L2 = R + 1; L2 < n; L2++) {
        if (L2 > R + 1 && a[L2 - 1] === a[L2]) continue

        let search = -(sum1 + a[L2]) // L + R - t + L2 = - R2
        let R2 = binary_search(a, search, L2 + 1, n - 1)
        if (R2 !== -Infinity) {
          aa.push([a[L], a[R], a[L2], a[R2]])
        }
      }
    }
  }
  return aa
}
console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
