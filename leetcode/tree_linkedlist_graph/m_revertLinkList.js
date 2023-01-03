function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
const ll = new ListNode(1, new ListNode(2, new ListNode(3, null)))

/* 
Iteration solution (same as recursive)
// cur 1->null
// cur 2->1->null
// cur 3->2->1->null
// cur 4->3->2->1->null
*/
let reverseList = (head) => {
  let cur = head
  let prev = null
  while (cur) {
    const temp = cur
    ;[cur, temp.next] = [cur.next, prev]
    prev = temp
  }
  return prev
}
console.log(reverseList(ll))

/* 
Recursion solution: return cur from recursive fn (fn build )
// cur 1->null
// cur 2->1->null
// cur 3->2->1->null
// cur 4->3->2->1->null
*/
let recur = (cur, prev) => {
  const next = cur.next
  cur.next = prev
  return next ? recur(next, cur) : cur
}
let reverseList = (head) => {
  return recur(head, null)
}
console.log(reverseList(ll))

let reverseList = (head) => {
  let cur = head
  let prev = null
  while (cur) {
    const temp = cur
    cur = cur.next
    temp.next = prev
    prev = temp
  }
  return prev
}
console.log(reverseList(ll))
