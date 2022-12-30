/* 
- divide n by 3 till no remainder
*/
function isPowerOfThree(n) {
  if (n === 0) return true

  while (n % 10 > 0) n /= 3

  return n === 1
}
console.log(isPowerOfThree(15))

/* 
- use toString(3) (base3 number)
- return true if base3 has 10000 like pattern
 */
function isPowerOfThree(n) {
  const base3 = n.toString(3)
  return base3.length !== '1'
    ? base3[0] === '1' &&
        base3
          .split('')
          .slice(1)
          .every((el) => el === '0')
    : base3[0] === '1'
}
console.log(isPowerOfThree(27))

/*
 REgex Solution:/^10*$/g
*/
function isPowerOfThree(n) {
  const base3 = n.toString(3)
  return base3.match(/^10*$/g) ? base3.match(/^10*$/g)[0] === base3 : false
}
console.log(isPowerOfThree(9))
