/* 
  Time: nlogn 
  Space: O(1)
  In place
  best for big amount of data sorting
  not STABLE

  *add((-1)*num) to make it maxHeap

  - parent index = floor(cur/2)
  - left index = cur*2
  - right index = cur*2 + 1
*/

export function MinHeap() {
  this.list = []
  this.size = 0
  this.get = function () {
    return this.list
  }
  this.init = function (values) {
    if (typeof values == 'number') values = [values]
    values.forEach((value) => this.add(value))
  }
  this.add = function (value) {
    this.size++
    this.list.push(value)
    if (this.list.length == 1) return value
    this.heapifyUp()
    return this.list[0]
  }
  this.shift = function () {
    if (this.list.length == 0) return null
    this.size--
    if (this.list.length == 1) return this.list.pop()
    const prevRoot = this.list[0]
    // bring last val to root
    this.list[0] = this.list.pop()
    // reorder top to bottom
    this.heapifyDown()
    return prevRoot
  }
  this.heapifyUp = function () {
    let i = this.list.length - 1
    while (!this.isRoot(i) && this.getParentNode(i) > this.list[i]) {
      ;[this.list[this.getParentIndex(i)], this.list[i]] = [this.list[i], this.getParentNode(i)]
      i = this.getParentIndex(i)
    }
  }
  this.heapifyDown = function () {
    if (this.list.length < 2) return
    let i = 0
    const currentVal = this.list[0]
    let leftVal = this.getLeftNode(i)
    let rightVal = this.getRightNode(i)
    while (leftVal !== undefined && (currentVal > leftVal || currentVal > rightVal)) {
      if (currentVal > leftVal && (rightVal === undefined || leftVal < rightVal)) {
        ;[this.list[this.getLeftIndex(i)], this.list[i]] = [currentVal, leftVal]
        i = this.getLeftIndex(i)
      } else {
        ;[this.list[this.getRightIndex(i)], this.list[i]] = [currentVal, rightVal]
        i = this.getRightIndex(i)
      }
      leftVal = this.getLeftNode(i)
      rightVal = this.getRightNode(i)
    }
  }
  /* utils methods */
  this.isRoot = function (index) {
    return index == 0
  }
  this.getLeftIndex = function (index) {
    return 2 * index + 1
  }
  this.getLeftNode = function (index) {
    return this.list[this.getLeftIndex(index)]
  }
  this.getRightIndex = function (index) {
    return 2 * index + 2
  }
  this.getRightNode = function (index) {
    return this.list[this.getRightIndex(index)]
  }
  this.getParentIndex = function (index) {
    return Math.floor((index % 2 == 0 ? index - 1 : index) / 2)
  }
  this.getParentNode = function (index) {
    const parentIndex = this.getParentIndex(index)
    return this.list[parentIndex]
  }
}

// const array = [3, 9, 4, 88, 2, 0]
const heap = new MinHeap()
heap.add(3)
heap.add(9)
heap.add(4)
heap.add(88)
heap.add(2)
heap.add(0)
heap.shift()
// console.log(heap)

// const res = []
// while (heap.list.length != 1) {
//   res.push(heap.shift())
// }

// console.log(res)

const a = new Array('jhohn')
