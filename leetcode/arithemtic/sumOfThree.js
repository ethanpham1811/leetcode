/*
 */
const sumOfThree = function (num) {
  const pivot = num / 3
  if (num % 3 == 0) {
    return [pivot - 1, pivot, pivot + 1]
  }
  return []
}
console.log(sumOfThree(33))

console.log(54 / 3)
