/*
- set revertedNumber = origin modulo 10
- set originNumber = origin/10
- check if origin > reverted
- pass -> repeat above
- fail -> compare origin & reverted (return)
*/

function isPalinedrome(x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) return false

  let revertedNumber = 0
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10)
    x = Math.floor(x / 10)
  }
  return x == revertedNumber || x == Math.floor(revertedNumber / 10)
}

console.log(isPalinedrome(12334))
