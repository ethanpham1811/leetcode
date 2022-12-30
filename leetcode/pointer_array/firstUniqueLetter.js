/* indexOf === lastIndexOf */
var firstUniqChar = function (s) {
  for (var i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
  }
  return -1
}

/* hashmap */
let firstUniqChar = function (str) {
  const map = new Map()

  for (const el of str) {
    if (map.has(el)) {
      map.set(el, map.get(el) + 1)
    } else {
      map.set(el, 1)
    }
  }
  const array = Array.from(map)
  for (let i = 0; i < array.length; i++) {
    if (array[1] === 1) return i
  }
  return -1
}
console.log(firstUniqChar('loveleetcode'))
