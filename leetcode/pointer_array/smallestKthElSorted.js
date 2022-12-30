import {MinHeap} from '../utils/minHeapify.js'

const matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15]
]
const kthSmallest = function (matrix, k) {
  const heap = new MinHeap()
  for (const element of matrix) {
    for (let j = 0; j < matrix[0].length; j++) {
      heap.add(element[j])
    }
  }
  const res = []
  while (heap.list.length != 1) res.push(heap.remove())
  return res[k - 1]
}
console.log(kthSmallest(matrix, 8))
