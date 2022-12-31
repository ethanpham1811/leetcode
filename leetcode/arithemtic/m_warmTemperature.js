/* https://leetcode.com/problems/daily-temperatures/
  Monotonic decreasing stack
  O(2.n) not n^2!!!!! 
  1st loop go over a portion of the array, then process it in the 2nd loop, done -> start the new portion & repeat
  - loop all num
  - if cur < top of stack -> push curIndex to stack
  - if cur > top of stack -> pop stack, update res till cur < top again, repeat process
*/
export const dailyTemperatures = function (temps) {
  const res = Array(temps.length).fill(0)
  const posStack = []
  for (let i = 0; i < temps.length; i++) {
    while (posStack.length > 0 && temps[posStack[posStack.length - 1]] < temps[i]) {
      const index = posStack.pop()
      res[index] = i - index
    }
    posStack.push(i)
  }
  return res
}
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
