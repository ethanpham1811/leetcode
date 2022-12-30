import {linkedList} from '../utils/linkedList.js'
/* 
Linked list
- remove first element which is smaller
- put list after cut & the other list to recursive fn (return {val: smallerValue , next: fn()})
*/

export function mergeTwoLists(list1, list2) {
  if (!list1 || !list2) {
    return list1 || list2
  }
  let val

  if (list1.val <= list2.val) {
    val = list1.val
    list1 = list1.next
  } else if (list1.val > list2.val) {
    val = list2.val
    list2 = list2.next
  }
  return {val, next: mergeTwoLists(list1, list2)}
}
// console.log(mergeTwoLists(linkedList([1, 3, 4]), linkedList([2, 3, 6])))

/* 
Iterative approach
*/

function mergeTwoLists2(list1, list2) {
  let list3 = linkedList([])
  let cur = list3

  while (list1 && list2) {
    // console.log(cur)
    if (list1.val <= list2.val && list1 && list2) {
      cur.next = list1
      list1 = list1.next
      cur = cur.next
    } else {
      cur.next = list2
      list2 = list2.next
      cur = cur.next
    }
    cur.next = !list1 ? list2 : list1
  }
  return list3.next.next.next.next
}
// console.log(mergeTwoLists2(linkedList([1, 3, 5]), linkedList([2, 4, 6])))

/* 
Array
*/
function mergeTwoArray(list1, list2) {
  if (list1.length === 0 || list2.length === 0) {
    return list1.length === 0 ? list2 : list1
  }
  let val
  if (list1[0] <= list2[0]) {
    val = list1[0]
    list1 = list1.splice(1)
  } else if (list1[0] > list2[0]) {
    val = list2[0]
    list2 = list2.splice(1)
  }
  return [val, ...mergeTwoArray(list1, list2)]
}
// console.log(mergeTwoArray([1, 3, 4], [2, 3, 6]))
