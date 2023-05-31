// import {linkedList} from './utils/linkedList'

function linkedList(arr) {
  return arr.length > 0
    ? arr.reduceRight((acc, curr) => {
        return {val: curr, next: acc === 0 ? null : acc}
      }, 0)
    : {val: 0, next: null}
}

function addTwoNumbers(l1, l2) {
  const res = {val: 0, next: null}
  let l3 = res
  let remainder = 0
  while (l1 || l2) {
    const v1 = l1?.val || 0
    const v2 = l2?.val || 0
    const sum = v1 + v2 + l3.val
    remainder = Math.floor(sum / 10)
    l1 = l1?.next
    l2 = l2?.next
    l3.val = sum % 10
    if (l1 || l2 || remainder) {
      l3.next = {val: remainder, next: null}
      l3 = l3.next
    }
  }
  return res
}
console.log(addTwoNumbers(linkedList([9, 9, 9, 9, 9, 9, 9]), linkedList([9, 9, 9, 9])))
