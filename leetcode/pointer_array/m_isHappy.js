/*  https://leetcode.com/problems/happy-number/description/
Input: n = 19
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1 */
/*
Recursion approach: Space O(n) + O(stacks) - Time O(n)
- split num to digits
- return sum of square digit (recursive fn return sum)
- check HasMap contain digit -> return (duplicated number)
*/
// function isHappy(x) {
//   let map = new Map()
//   return split(x, map) === 1 || false
// }

// const split = (num, map) => {
//   if (map.has(num) || num === 1) return num
//   else map.set(num, true)

//   let sum = 0
//   while (num > 0) {
//     let remain = num % 10
//     num = Math.floor(num / 10)
//     sum += remain * remain
//   }
//   return split(sum, map)
// }
// console.log(isHappy(19))

/* BETTER: ITERATION SOLUTION 
- non recursive
- apply linked list strategy with getNext()
- 2 pointer fast & slow to detect cycle (or we can use hash map)
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
  let slow = x
  let fast = getNext(x)
  while (fast != 1 && slow != fast) {
    slow = getNext(slow)
    fast = getNext(getNext(fast))
  }
  return fast == 1
}
console.log(isHappy(68))
