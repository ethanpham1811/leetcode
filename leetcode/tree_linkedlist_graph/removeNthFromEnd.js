function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/* using runner pointer
- while (n-- > 0): runner = runner.next (get the opposite node of the result node)
- while (runner = runner.next !== null): p = p.next (put 2 pointer run the same speed)
- get the nth node..
*/
function removeNthFromEnd(head, n) {
  let newHead = new ListNode(0)
  newHead.next = head
  let p = newHead
  let runner = newHead
  while (n > 0) {
    runner = runner.next
    n--
  }
  while (runner.next != null) {
    runner = runner.next
    p = p.next
    console.log(p, runner, newHead)
  }
  p.next = p.next.next
  return newHead.next
}
console.log(removeNthFromEnd(list, 4))
/* my approach
- recursive to rebuild listNode
*/
function removeNthFromEnd(origin, n) {
  let last = origin
  let tailIndex = 1
  while (last.next !== null) {
    tailIndex++
    last = last.next
  }
  if (n > tailIndex) {
    return null
  } else if (n === tailIndex) {
    return origin.next
  } else {
    const res = rebuild(origin, 1, tailIndex - n)
    return new ListNode(res[0], res[1])
  }
}
function rebuild(head, count, tailIndex) {
  if (count === tailIndex) return [head.val, head.next.next]
  count++
  const node = rebuild(head.next, count, tailIndex)
  return [head.val, new ListNode(node[0], node[1])]
}

// console.log('final res', removeNthFromEnd(list, 4))

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
