/* 
  Time: nlogn 
  Space: O(1)
  In place
  best for big amount of data sorting
  not STABLE

  *add((-1)*num) to make it maxHeap
*/

export function MinHeap() {
  this.list = []
  this.init = function (values) {
    if (typeof values == 'number') values = [values]
    values.forEach((value) => this.add(value))
  }
  this.heapify = function (array) {
    this.list = array
    let count = 0
    while (count < array.length) {
      this.heapifyUp()
      count++
    }
    return this.list
  }
  this.add = function (value) {
    this.list.push(value)
    if (this.list.length == 0) return value
    this.heapifyUp()
    return this.list[0]
  }
  this.remove = function () {
    if (this.list.length == 0) return null
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
    const val = this.list[i]
    while (!this.isRoot(i) && this.getParentNode(i) > val) {
      ;[this.list[this.getParentIndex(i)], this.list[i]] = [val, this.getParentNode(i)]
      i = this.getParentIndex(i)
    }
  }
  this.heapifyDown = function () {
    if (this.list.length < 2) return
    let i = 1
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
    return 2 * index
  }
  this.getLeftNode = function (index) {
    return this.list[this.getLeftIndex(index)]
  }
  this.getRightIndex = function (index) {
    return 2 * index + 1
  }
  this.getRightNode = function (index) {
    return this.list[this.getRightIndex(index)]
  }
  this.getParentIndex = function (index) {
    return Math.floor(index / 2)
  }
  this.getParentNode = function (index) {
    return this.list[this.getParentIndex(index)]
  }
}

const array = [3, 9, 4, 88, 2, 0]
const heap = new MinHeap()
heap.init(array)
// heap.remove()
// -100
// heap.remove()
// -10
// heap.add(-3)
// -3
// heap.add(5)
// -3
console.log(heap.list)

// const res = []
// while (heap.list.length != 1) {
//   res.push(heap.remove())
// }

// console.log(res)
