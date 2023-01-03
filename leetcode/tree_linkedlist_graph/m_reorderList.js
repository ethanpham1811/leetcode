export function linkedList(arr) {
  return arr.length > 0
    ? arr.reduceRight((acc, curr) => {
        return {val: curr, next: acc === 0 ? null : acc}
      }, 0)
    : {val: 0, next: null}
}
console.log(reorderList(linkedList([1, 2, 3, 4, 5])))

/* https://leetcode.com/problems/reorder-list/description/
O(n)
- split into 2 list by slow fast runner
- reverse second list
- merge first & second
*/
export function reorderList(head) {
  if (head.next == null) return head
  let slow = head
  let fast = head.next

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let second = Object.assign({}, slow.next)
  let first = head
  slow.next = null

  second = reverseList(second)
  while (second) {
    const firstTmp = first.next
    const secondTmp = second.next
    /* technique to inject 1 to another */
    ;[first.next, second.next] = [second, first.next]
    /* ---end--- */
    second = secondTmp
    first = firstTmp
  }
  return head
}
function reverseList(head) {
  if (head.next === 0) return head
  let cur = head
  let prev = null,
    next
  while (cur) {
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}
// head 1 2 3
// tail 5 4

// 0 1-5
// 1 1-5-2
// 2 1-5-2-4
// 3 1-5-2-4-3

// const first = {val: 'khoi', next: {1: 1}}
// const second = {val: 'yen', next: {2: 2}}
// let firstTmp = first.next
// first.next = second
// second.next = firstTmp
