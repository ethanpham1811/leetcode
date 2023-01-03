import {linkedList} from '../utils/linkedList.js'
import {mergeTwoLists} from './mergeSortedLinkedList.js'

/* https://leetcode.com/problems/sort-list/ 
2
*/
const sortList = function (head) {
  if (!head.next) return head

  const [left, right] = split(head)
  let sortedLeft = sortList(left)
  let sortedRight = sortList(right)
  return mergeTwoLists(sortedLeft, sortedRight)
}
function split(head) {
  let slow = head
  let fast = head.next

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  const right = slow.next
  slow.next = null
  const left = head

  return [left, right]
}
console.log(sortList(linkedList([4, 7, 2, 1, 3])))
