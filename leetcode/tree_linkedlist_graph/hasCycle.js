function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
function convert(array) {
  return array.reduceRight((acc, cur) => {
    return new ListNode(cur, acc ? acc : null)
  }, null)
}

/* simple:  two pointer fast slow */
let hasCycle = function (head) {
  let fast = head
  let slow = head
  while (fast != null) {
    fast = fast.next.next
    slow = slow.next

    if (fast == slow) {
      return true
    }
  }
  return false
}
console.log(hasCycle(convert([3, 2, 0, -4])))

/* advance:  two pointer fast slow + 1 pointer when fast == slow */
let returnCycle = function (head) {
  let fast = head
  let slow = head
  while (fast != null) {
    fast = fast.next.next
    slow = slow.next

    if (fast == slow) {
      //when fast meets slow, the cycle is not complete, it has to plush the stick to complete
      let slow2 = head
      while (slow2 !== slow) {
        slow2 = slow2.next
        slow = slow.next
      }
      return slow
    }
  }
  return null
}
console.log(returnCycle(convert([3, 2, 0, -4])))
