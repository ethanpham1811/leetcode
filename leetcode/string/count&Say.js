/* https://leetcode.com/problems/count-and-say/description/
// 1 = 1
// 2 = 11
// 3 = 21
// 4 = 1211
// 5 = 111221
 */
const countAndSay = function (n) {
  if (n === 1) return '1'

  let prevStr = countAndSay(n - 1)
  let newStr = ''
  let curNum = prevStr[0]
  let count = 1
  for (let i = 1; i <= prevStr.length; i++) {
    if (prevStr[i] === curNum) count++
    else {
      newStr += `${count}${prevStr[i - 1]}`
      count = 1
      curNum = prevStr[i]
    }
  }

  return newStr
}
console.log(countAndSay(4))
