/* binary search 2: 
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
function longestCommonPrefix(list) {
  if (list.length == 0) return ''
  if (list.length == 1) return list[0]
  return split(list.splice(1), list[0])
}

function split(list, prefix) {
  if (prefix.length < 2) return ''
  const median = Math.ceil(prefix.length / 2)
  const left = prefix.substring(0, median)
  const right = prefix.substring(median, prefix.length)

  for (let word of list) {
    if (!word.includes(left)) {
      return split(list, left)
    }
  }
  return left + split(list, right)
}

console.log(longestCommonPrefix(['flower', 'f33ur', 'flon']))

/* horizontal approach: 
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

/* vertical approach:
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

/* my approach:
- loop through letters of first (pivot)
- check others[letterIndex]
- pass -> push letter to prefix []
- fail ->  return prefix
*/
function longestCommonPrefix(list) {
  if (list.length == 0) return
  if (list.length == 1) return list[0]

  const prefix = []
  let stop = false

  for (let i = 0; i < list[0].length; i++) {
    for (let word of list.splice(1)) {
      if (!word[i] || word[i] !== list[0][i]) {
        stop = true
        break
      }
    }
    if (stop) {
      return prefix.join('')
    } else {
      prefix.push(list[0][i])
    }
  }
  return prefix.join('')
}

console.time()
console.log(longestCommonPrefix(['dlo', 'dliaw', 'dlght']))
console.timeEnd()
