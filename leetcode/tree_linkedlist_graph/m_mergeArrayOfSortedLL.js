import {linkedList, linkedListToArray} from '../utils/linkedList.js'
import {mergeTwoLists} from './mergeSortedLinkedList.js'

/* O(n.logk.n/2) k: total list member, n: total nodes in a ll
- recursion solution, using middle
- merge left + right recursively
- IMPORTANT!!!!: This method use Array.slice O(n) (not efficient, try the second solution)
 */
let mergeKLists = function (lists) {
  return linkedListToArray(recursive(lists))
}
function recursive(array) {
  if (array.length === 1) return array[0]
  const mid = Math.ceil(array.length / 2)
  const left = array.slice(0, mid)
  const right = array.slice(mid)

  return mergeTwoLists(recursive(left), recursive(right))
}
// console.log(mergeKLists([linkedList([1, 4, 5]), linkedList([1, 3, 4]), linkedList([2, 6]), linkedList([4, 6, 9, 7])]))

/* https://leetcode.com/problems/merge-k-sorted-lists/description/
Better Solution, still O(k/2.logk.n) k array n el
- use for loop with step of 2!!!!
*/
let mergeKLists2 = function (lists) {
  if (lists.length == 0) return []
  while (lists.length > 1) {
    const tempMergedList = []
    for (let i = 0; i < lists.length; i = i + 2) {
      let first = lists[i]
      let second = i + 1 < lists.length ? lists[i + 1] : null
      tempMergedList.push(mergeTwoLists(first, second))
    }
    lists = tempMergedList
  }

  return lists[0]
}
console.log(mergeKLists2([]))
