/* 
  sliding window: m+n*x*104
  - convert second word to mapKey (011020001...)
  - loop through every letter of first word
  - shift R & check if R == first letter of window
  - if R matches -> continue shift L until L stil valid
  - if R doesnt match -> continue shift R
*/
export const minWindow = function (first, second) {
  if (first.length < second.length) return ''
  const key = convertToMapKey(second)
  const limit = second.length
  let l = 0
  let initR = limit - 1

  let res = ''
  let window
  for (let r = initR; r < first.length; r++) {
    if (l === 0) {
      ;[res, l, window] = shiftLeft(res, window, l, r, first, key, true)
    } else {
      if (first[r] === window[0]) {
        ;[res, l, window] = shiftLeft(res, window, l, r, first, key, false)
      }
    }
  }
  return res
}
/* Shift method */
function shiftLeft(res, window, l, r, first, key, isInit) {
  while (compareKey(key, convertToMapKey(first.slice(l + (!isInit ? 1 : 0), r + 1)))) {
    window = first.slice(l + (!isInit ? 1 : 0), r + 1)
    res = storeRes(res, window)
    l++
  }
  return [res, l, window]
}
/* Store res method */
function storeRes(res, window) {
  return res === '' ? window : res.length >= window.length ? window : res
}
/* Compare key method */
function compareKey(k1, k2) {
  for (let i in k1) {
    if (k1[i] > k2[i] || k2[i] === undefined) return false
  }
  return true
}
/* Convert to map key method */
function convertToMapKey(str) {
  const key = {}
  for (const letter of str) {
    key[letter] = key[letter] ? key[letter] + 1 : 1
  }
  return key
}
// console.log(minWindow('ADOBECODEBANC', 'ABC'))
