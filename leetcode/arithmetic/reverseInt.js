const reverse = function (x) {
  let result = 0
  let signed = false
  const boundary = 2 ** 31 - 1
  if (x < 0) {
    signed = true
    x *= -1
  }

  while (x > 0) {
    const remainder = x % 10
    x = Math.floor(x / 10)
    if (Math.floor((boundary + Boolean(signed) - remainder) / 10) >= result) {
      result = result * 10 + remainder
    } else {
      return 0
    }
  }
  return signed ? result * -1 : result
}
console.log(reverse(-2423))
