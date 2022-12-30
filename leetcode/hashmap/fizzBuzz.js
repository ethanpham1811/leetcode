/* 
  String Concatenation approach
  Beware of the pattern Fizz / Buzz / Zazz
  Fizz + Buzz = FizzBuzz
  Fizz + Buzz + Zazz = FizzBuzzZazz
*/
var fizzBuzz = function (n) {
  const array = []
  for (let i = 1; i <= n; i++) {
    let str = ''
    if (i % 3 === 0) {
      str += 'Fizz'
    }
    if (i % 5 === 0) {
      str += 'Buzz'
    }
    if (str !== '') {
      array.push(str)
    } else {
      array.push(i.toString())
    }
  }
  return array
}
console.log(fizzBuzz(15))

/* naive approach */
var fizzBuzz = function (n) {
  const array = []
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      array.push('FizzBuzz')
    } else if (i % 5 === 0) {
      array.push('Buzz')
    } else if (i % 3 === 0) {
      array.push('Fizz')
    } else {
      array.push(i.toString())
    }
  }
  return array
}
console.log(fizzBuzz(3))
