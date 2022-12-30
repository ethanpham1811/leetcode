/* Iteration solution O(n) 
- two sum variables rob1 & rob2
0 2
2 7
7 11
11 11
11 12
12 16
16 18
18 18
18 20
*/
export let rob2 = function (nums) {
  let rob1 = 0
  let rob2 = 0
  //[rob1, rob2, n, n+1, n+2...]
  for (const n of nums) {
    const temp = Math.max(rob1 + n, rob2)
    rob1 = rob2
    rob2 = temp
    console.log('rob1: ' + rob1, 'rob2: ' + rob2)
  }
  return rob2
}
console.log(rob2([2, 7, 9, 3, 1, 5, 6, 1, 2]))

/* Recursion solution O(2^n) 
- sum nth = Math.max(sum(nth+2), sum(nth+3))
*/

let recur = function (nums, nth) {
  if (nth >= nums.length) return 0

  const first = recur(nums, nth + 2)
  const second = recur(nums, nth + 3)

  return nums[nth] + (first > second ? first : second)
}
let rob = function (nums) {
  return Math.max(recur(nums, 0), recur(nums, 1))
}
// console.log(rob([2, 7, 9, 3, 1, 5, 6, 1, 2]))

// 2 7 - 1 3 - 4 9 - 7 8 - 1 3

// const a = [1, 2]
// console.log(a[4] + 3)
// console.log(Math.max(3, NaN))
