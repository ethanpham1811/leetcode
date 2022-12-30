function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next

  this.size = () => {
    let count = 1
    let cur = this
    while (cur.next !== null) {
      cur = cur.next
      count++
    }
    return count
  }
  // this.get = (nth) => {
  //   let count = 1
  //   let cur = this
  //   while (count < nth) {
  //     cur = cur.next
  //     count++
  //   }
  //   return cur
  // }
  // this.getInt = (start, stop, isReverse = false) => {
  //   let cur = this.get(start)
  //   // console.log('here'+start, cur)
  //   let num = cur.val
  //   while (start < stop && cur.next !== null) {
  //     cur = cur.next
  //     num = num * 10 + cur.val
  //     start++
  //   }
  //   if (isReverse) {
  //     let reverted = 0
  //     while (num > 0) {
  //       let d = num % 10
  //       reverted = reverted * 10 + d
  //       num = Math.floor(num / 10)
  //     }
  //     return reverted
  //   }
  //   return num
  // }
}
const ll = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(2, new ListNode(1, null))))))

/* 
  Recursive approach
  compare first value from recur with the head (since recur read data from bottom up)
  this take O(n) space because of recur stack frame creation
*/
let cur = ll
const isPalindrome = (head) => {
  if (head !== null) {
    const res = isPalindrome(head.next)
    if (head.val !== cur.val) return false

    cur = cur.next
    return res
  }
  return true
}
console.log(isPalindrome(ll))

/* 
  loop O(n) to get Size
  loop O(n/2) to set first half to []
  loop O(n/2) to check last half with []
  return false if not match
*/
let isPalindrome = function (ll) {
  let size = 0
  let list = ll
  while (list !== null) {
    list = list.next
    size++
  }
  const mid = Math.floor(size / 2)
  let p1 = 1
  let cur = ll
  const checkList = []
  while (p1 <= mid) {
    checkList.push(cur.val)
    cur = cur.next
    p1++
  }
  if (size % 2 !== 0) {
    p1++
    cur = cur.next
  }
  let p2 = size
  while (p2 >= p1) {
    if (cur.val !== checkList[p2 - p1]) {
      return false
    }
    cur = cur.next
    p2--
  }
  return true
}
console.log(isPalindrome(ll))
