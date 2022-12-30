let divide = function (dividend, divisor) {
  const hi = 2 ** 31 - 1
  const lo = (-2) ** 31
  let res = 0
  let sum = 0
  let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1
  console.log(sign)
  while (sum <= Math.abs(dividend)) {
    sum += Math.abs(divisor)
    if (sum <= Math.abs(dividend)) {
      if (res * sign > hi || res < lo) {
        return res * sign > hi ? hi : lo
      } else {
        res++
      }
    }
  }

  return res === 0 ? 0 : res * sign
}
/* 
Binary exponential approach:
- sum += sum (1 2 4 8 16 32 ...)
- count the extra ...
 */
function divide(dividend, divisor) {
  const hi = 2 ** 31 - 1
  const lo = (-2) ** 31
  let sign = 1
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) sign = -1
  let ldividend = Math.abs(dividend)
  let ldivisor = Math.abs(divisor)

  if (ldivisor == 0) return Infinity
  if (ldividend == 0 || ldividend < ldivisor) return 0
  let lans = ldivide(ldividend, ldivisor)
  let ans
  if (lans > hi) {
    //Handle overflow.
    ans = sign == 1 ? hi : lo
  } else {
    ans = sign * lans
  }
  return ans
}

function ldivide(ldividend, ldivisor) {
  if (ldividend < ldivisor) return 0
  let sum = ldivisor
  let multiple = 1
  while (sum + sum <= ldividend) {
    sum += sum
    console.log('sum ' + sum)
    multiple += multiple
  }
  // console.log(ldivide(ldividend - sum, ldivisor))
  return multiple + ldivide(ldividend - sum, ldivisor)
}
console.log(divide(17, 3))
