/* 
Regex solution
*/
const myAtoi = function (s) {
  const regex = /^\s*-?[0-9]{1,200}/
  const lo = (-2) ** 31
  const hi = 2 ** 31 - 1
  console.log(hi)

  if (s.match(regex)) {
    const res = parseInt(s.match(regex)[0].trim())
    if (res < lo || res > hi) return res < lo ? lo : hi

    return res
  }

  return 0
}
console.log(myAtoi('21474836460'))

// let tesst = "afskfsd33j"
// let test = tesst.match(/a(.*)j/);
// console.log(test);

const a = 987
console.log(a.toString(2))
