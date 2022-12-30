/* O(3n) + space O(2n)
- 1 loop for head (store product from left) 
- 1 loop for tail (store product from right)
- 1 loop for res [(left-1)*(right+1)...]
head: [(1, 2, 6, 24)]
tail: [(24, 24, 12, 4)]
res:  [(24, 12, 8, 6)]
 */
let productExceptSelf = function (nums) {
  const res = []
  const head = new Map()
  const tail = new Map()

  let tempHead = 1
  for (let i = 0; i < nums.length; i++) {
    head.set(i, nums[i] * tempHead)
    tempHead *= nums[i]
  }
  let tempTail = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    tail.set(i, nums[i] * tempTail)
    tempTail *= nums[i]
  }
  for (let i = 0; i < nums.length; i++) {
    res.push((i == 0 ? 1 : head.get(i - 1)) * (i + 1 == nums.length ? 1 : tail.get(i + 1)))
  }
  return res
}
console.log(productExceptSelf([1, 2, 3, 4]))

/* O(n) + space O(1) Upgrade of above solution!!!!!!!!!!!!!!! BEST solution
- compute left product and push it to res
- compute right product and set res[i] = res[i]*right
1st loop res: [(1, 1, 2, 6)]
2nd loop res: [(1*24, 1*12, 2*4, 6*1)]
 */
let productExceptSelf2 = function (nums) {
  const res = []
  let headProd = 1
  for (const n of nums) {
    res.push(headProd)
    headProd *= n
  }
  let tailProd = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= tailProd
    tailProd *= nums[i]
  }
  return res
}
console.log(productExceptSelf2([1, 2, 3, 4]))
