/* n^2
- expand left + right at the same time 
- do the same process with EVEN and ODD length pivot
*/
const countSubstrings = function (str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    count += countParli(str, i, i)
    count += countParli(str, i, i + 1)
  }
  return count
}
const countParli = function (s, l, r) {
  let count = 0
  while (l >= 0 && r < s.length && s[l] === s[r] && l !== r) {
    count++
    l--
    r++
  }
  return count
}
console.log(countSubstrings('khaaoi heyeneyhe khoikhung taraarat teerre'))

/* 
brute force n^3 (tripple loop)
*/
const countSubstrings = function (str) {
  const res = []
  for (let i = 0; i < str.length; i++) {
    loop: for (let j = i + 1; j < str.length; j++) {
      const sub = str.slice(i, j)
      let head = 0
      let tail = sub.length - 1
      if (tail != head) {
        while (head < tail) {
          if (sub[head] !== sub[tail]) continue loop
          head++
          tail--
        }
        res.push(sub)
      }
    }
  }
  return res
}
console.log(countSubstrings('khaaoi heyeneyhe khoikhung taraarat teerre'))

const a = 'khoiyen'
console.log(a[14])
