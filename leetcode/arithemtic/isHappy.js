/* 
Input: n = 19
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1 */
/*
- split num to digits
- return sum of square digit (recursive fn return sum)
- check HasMap contain digit -> return (duplicated number)
*/
function isHappy(x) {
  let map = new Map()
  return split(x, map) === 1 || false
}

const split = (num, map) => {
  if (map.has(num) || num === 1) {
    return num
  } else {
    map.set(num, true)
  }
  let sum = 0
  while (num > 0) {
    let remain = num % 10
    num = Math.floor(num / 10)
    sum += parseInt(remain) ** 2
  }
  return split(sum, map)
}
console.log(isHappy(19))

/*
- apply linked list strategy with getNext()
- non recursive
*/
function getNext(n) {
  let sum = 0
  while (n > 0) {
    let d = n % 10
    n = Math.floor(n / 10)
    sum += d * d
  }
  return sum
}
function isHappy(x) {
  const map = new Map()
  while (x != 1 && !map.has(x)) {
    map.set(x, true)
    x = getNext(x) // important!! strategy
  }
  return x == 1
}
console.log(isHappy(19))

let a = 'khoi'

// !!!!!!!!!!!!!!there is better solution -> 2 pointer fast slow while (fase !== slow)....
