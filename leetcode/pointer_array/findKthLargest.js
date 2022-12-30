import {MinHeap} from '../utils/minHeapify.js'

const findKthLargest = function (nums, k) {
  const heap = new MinHeap()
  const newArray = [-1, ...nums]
  console.log(heap.heapify(newArray))
}
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
