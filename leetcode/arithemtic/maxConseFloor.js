/* https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/
  - find Max between: Bottom - special[0] -> special[1] -> ... special[n] -> top
 */
const maxConsecutive = (bottom, top, special) => {
  special.sort((s1, s2) => s1 - s2)
  let floors = special[0] - bottom

  for (let i = 1; i < special.length; i++) floors = Math.max(floors, special[i] - special[i - 1] - 1)

  floors = Math.max(floors, top - special.pop())

  return floors
}
console.log(maxConsecutive(2, 9, [4, 6]))

/* My Naive approach 
  - check if prev is special? -> starting num -> start count
*/
const maxConsecutive2 = function (bottom, top, special) {
  const specialMap = new Map()
  for (const s of special) specialMap.set(s, true)

  let res = special[0] - bottom
  for (let num = bottom; num <= top; num++) {
    const curIsSpecial = specialMap.has(num)
    const prevIsSpecial = specialMap.has(num - 1)
    if ((num == bottom && !curIsSpecial) || (!curIsSpecial && prevIsSpecial)) {
      let counter = 1

      while (num + counter <= top && !specialMap.has(num + counter)) counter++
      num += counter
      res = Math.max(res, counter)
    }
  }
  return res
}
console.log(maxConsecutive2(2, 17, [4, 6]))
