/* binary search 2: Logn
- set first string (pivot)
- find median, set low high
- check others.includes(left) (recursive fn return true false)
- pass -> increase low 
- fail -> reduce high 
*/
function longestCommonPrefix(strs) {
  if (strs == null || strs.length == 0) return ''
  let low = 0
  let high = strs[0].length
  while (low <= high) {
    let middle = (low + high) / 2
    if (isCommonPrefix(strs, middle)) low = middle + 1
    else high = middle - 1
  }
  console.log(low, high)
  return strs[0].substring(0, Math.floor((low + high) / 2))
}

function isCommonPrefix(strs, len) {
  let str1 = strs[0].substring(0, len)
  for (let i = 1; i < strs.length; i++) if (!strs[i].startsWith(str1)) return false
  return true
}

console.log(longestCommonPrefix(['flower', 'flour', 'flon']))

/* binary search approach: 
- set first string (pivot)
- find median -> split left, right
- check others.includes(left)
- pass -> check right (recursive fn return substring)
- fail -> check left (recursive fn return substring)
*/
function longestCommonPrefix(array) {
  if (array.length == 0) return ''
  if (array.length == 1) return array[0]
  return split(array.splice(1), array[0])
}

function split(array, prefix) {
  if (prefix.length < 2) return ''
  const median = Math.ceil(prefix.length / 2)
  const left = prefix.substring(0, median)
  const right = prefix.substring(median, prefix.length)

  for (let word of array) {
    if (!word.includes(left)) {
      return split(array, left)
    }
  }
  return left + split(array, right)
}

console.log(longestCommonPrefix(['flower', 'f33ur', 'flon']))

/* horizontal approach: O(m.n)
- set first as prefix
- check others.includes(prefix)
- fail -> substring prefix until includes(prefix)
*/
function longestCommonPrefix(strs) {
  if (strs.length == 0) return ''
  let prefix = strs[0]
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      if (prefix.length === 0) return ''
    }
  }
  return prefix
}

console.log(longestCommonPrefix(['flower', 'fliur', 'flon']))

/* vertical approach: O(m.n)
- loop through letters of first (pivot)
- check others[letterIndex]
- fail -> return pivot.substr(0, letterIndex)
- pass -> return pivot
*/
function longestCommonPrefix2(strs) {
  if (strs == null || strs.length == 0) return ''
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (i == strs[j].length || strs[j][i] != strs[0][i]) return strs[0].substring(0, i)
    }
  }
  return strs[0]
}
console.log(longestCommonPrefix2(['flower', 'flour', 'flin']))
