import {linkedList} from '../utils/linkedList.js'

/* https://leetcode.com/problems/insertion-sort-list
 */
const insertionSortList = function (head) {
  let cur = head
  const sorted = [cur]
  cur = cur.next
  while (cur) {
    let cur2 = cur
    for (let i = sorted.length - 1; i >= 0; i--) {
      if (cur2.val < sorted[i].val) {
        const temp = cur2.val
        cur2.val = sorted[i].val
        sorted[i].val = temp
        cur2 = sorted[i]
      }
    }
    sorted.push(cur)
    cur = cur.next
  }
  return head
}
console.log(insertionSortList(linkedList([4, 2, 1, 3])))
