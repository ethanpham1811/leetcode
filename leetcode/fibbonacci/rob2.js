/* Same as rob1, but can't choose both start and end num
- get Max(sum[0, n-1], sum[1, n])
*/
export let robPartial = function (nums) {
  let rob1 = 0
  let rob2 = 0
  //[rob1, rob2, n, n+1, n+2...]
  for (const n of nums) {
    const temp = Math.max(rob1 + n, rob2)
    rob1 = rob2
    rob2 = temp
  }
  return rob2
}
function rob(list) {
  if (list.length === 1) return list[0]
  const origin = [...list]
  list.pop()
  origin.shift()
  const left = list
  const right = origin
  return Math.max(robPartial(left), robPartial(right))
}
console.log(rob([1, 5]))
