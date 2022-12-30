/* 
sliding window:
- skip right on checking matched letter
- shift left on checking non-matched letter (only if amount of non-matched letter > times)
*/
let characterReplacement = function (str, times) {
  const set = new Set(str)
  let max = 0
  for (const letter of set) {
    let l = 0
    let panCount = 0
    for (let r = 0; r < str.length; r++) {
      if (str[r] !== letter) {
        panCount++
        if (panCount > times) {
          while (str[l] === letter) l++
          l++
          if (times === 0) continue
          else panCount--
        }
      }
      max = Math.max(max, r - l + 1)
    }
  }
  return max
}
console.log(characterReplacement('AABABBA', 1))

// A: A A A B B B A A B B A A B B B

// [aaabb] 5
// [bbaa] 4  if (next is not a -> move window)
// [baab] 4  move window
// [aabbaa] 6  if (next is a -> expand window)
// [baab] 4
// [aabb] 4
