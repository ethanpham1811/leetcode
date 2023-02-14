/** https://leetcode.com/problems/single-number/
 * @param {number[]} list
 * @return {number}
 * A^B = B^A
 * A^A = 0
 * A^0 = A
 * A^B^B^A = 0
 * A^B^C^B^A = C
 */
function singleNumber(list) {
  return list.reduce((acc, curr) => acc ^ curr)
}
console.log(singleNumber([4, 1, 4, 1, 5, 1, 1]))
