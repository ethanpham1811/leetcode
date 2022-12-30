export function linkedList(arr) {
  return arr.length > 0
    ? arr.reduceRight((acc, curr) => {
        return {val: curr, next: acc === 0 ? null : acc}
      }, 0)
    : {val: 0, next: null}
}

export function linkedListToArray(ll) {
  const b = []
  while (ll) {
    b.push(ll.val)
    ll = ll.next
  }
  return b
}

/* Doubly linkedlist implementation */
function DoublyListNode(val, next, prev) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
  this.prev = prev === undefined ? null : prev
}

export function DoublyLinkedList() {
  this.head = null
  this.tail = null
  this.size = 0
  /* Push - Enqueue */
  this.push = function (val) {
    this.size++
    const newNode = new DoublyListNode(val)

    if (this.tail) {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
      return newNode
    }
    this.head = newNode
    this.tail = newNode
    return newNode
  }
  /* Pop */
  this.pop = function () {
    if (this.tail) {
      this.size--
      const removedNode = this.tail
      this.tail = this.tail.prev
      if (this.tail) {
        this.tail.next = null
      } else {
        this.head = null
      }
      return removedNode
    }
    return undefined
  }
  /* Shift (add to head) */
  this.shift = function (val) {
    this.size++
    const newNode = new DoublyListNode(val)
    if (this.head) {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
      return newNode
    }
    this.head = newNode
    this.tail = newNode
    return newNode
  }
  /* Unshift - Dequeue (remove from head) */
  this.unShift = function () {
    if (this.head) {
      this.size--
      const removedNode = this.head
      this.head = this.head.next

      if (this.head) {
        this.head.prev = null
      } else {
        this.tail = null
      }
      return removedNode
    }
    return undefined
  }
  /* Delete nth */
  this.delete = function (nth) {
    if (nth === 0) return this.unShift()
    if (nth >= this.size) return 'out of bound'

    this.length--
    let removedNode = this.head
    let count = 0
    while (count < nth) {
      count++
      removedNode = removedNode.next
    }
    const right = removedNode.next
    const left = removedNode.prev
    left.next = right
    if (right) right.prev = left
    else this.tail = left

    return removedNode
  }
  /* Add nth */
  this.add = function (nth, val) {
    if (nth === 0) return this.shift(val)
    if (nth >= this.size) return 'out of bound'
    if (nth === this.size - 1) return this.push(val)

    const newNode = new DoublyListNode(val)
    this.length++

    let count = 0
    let right = this.head
    while (count < nth) {
      right = right.next
      count++
    }
    const left = right.prev.prev
    newNode.next = right
    newNode.prev = left
    right.prev = newNode
    left.next = newNode

    return newNode
  }
}
const a = new DoublyLinkedList()
a.push(1)
a.push(2)
a.push(3)
a.push(4)
a.push(5)
// a.delete(2)
// console.log(linkedListToArray(a.head))
