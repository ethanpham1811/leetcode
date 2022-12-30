import {MinHeap} from '../utils/sort/Divide & conquer/minHeapify.js'

/* https://leetcode.com/problems/find-median-from-data-stream
Time com: Add: Logn, Find: 1
Add:
- push to small heap (maxHeap)
- if it > large heap (minHeap) switch side
- if size is not abs equal > remove from one, add to another
Find
- return small[0] & large[0] comparision
 */
const MedianFinder = function () {
  this.small = new MinHeap()
  this.large = new MinHeap()
  this.addNum = function (num) {
    const small = this.small,
      large = this.large
    //add num to small (max heap)
    small.add(-1 * num)
    // if max of small < min of large
    if (small.list[0] && large.list[0] && -1 * small.list[0] > large.list[0]) {
      large.add(-1 * small.shift())
    }
    // if diff of size of 2 heap is >= 2
    if (small.size - large.size > 1) large.add(-1 * small.shift())
    if (large.size - small.size > 1) small.add(-1 * large.shift())
  }
  this.findMedian = function () {
    const small = this.small,
      large = this.large
    if (small.size > large.size) return -1 * small.list[0]
    if (small.size < large.size) return large.list[0]
    return (-1 * small.list[0] + large.list[0]) / 2
  }
}
const mf = new MedianFinder()
mf.addNum(1)
mf.addNum(2)
console.log(mf.small.list, mf.large.list)
console.log('median ' + mf.findMedian())
mf.addNum(3)
// mf.addNum(8)
console.log(mf.small.list, mf.large.list)
console.log('median ' + mf.findMedian())

// 3 8 13 55 99
