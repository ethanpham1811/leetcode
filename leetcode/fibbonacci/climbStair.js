/* 
- linear n complexity
- 2 variable to track first second
 */
function climbStairs(step) {
  let first = 1
  let second = 1
  // let res = 1
  let index = 1

  while (step > index) {
    const temp = first + second
    second = first
    first = temp
    index++
  }

  return first
}
console.log(climbStairs(7))

/* 
- binary solution
- not ideal because of duplication
 */
function climbStairs(step) {
  if (step === 1) return 1
  if (step === 0) return 1

  return climbStairs(step - 2) + climbStairs(step - 1)
}
console.log(climbStairs(7))
