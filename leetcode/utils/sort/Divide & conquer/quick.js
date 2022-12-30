/* 
Fastest and most efficient but not stable
Time: O(nlogn) worst: O(n2) if the partition is not equally divided (use suffle to reduce this)
  Space: O(logn), worst: O(n)
  In place
  best for big amount of data sorting
  not STABLE

  partition: find mid num, push all lesser to the left & rest to the right
  - median: (min + max) / 2
  - while minIndex <= maxIndex
  - increase minIndex til min >= median
  - decrease maxIndex til max <= median
  - if minIndex <= maxIndex -> swap value
  - alter original array inplace, return mid index

  main function: use mid index from partition to split left & right
*/
function partition(items, left, right) {
  //rem that left and right are pointers.
  let pivot = items[Math.floor((right + left) / 2)]
  while (left <= right) {
    //increase left if the value is less than the pivot
    while (items[left] < pivot) left++
    //decrease right if the value is more than the pivot
    while (items[right] > pivot) right--
    //else we swap.
    if (left <= right) {
      ;[items[left], items[right]] = [items[right], items[left]]
      left++, right--
    }
  }
  return left
}

export function quickSort(nums, left, right) {
  let pivotIndex
  if (nums.length > 1) {
    pivotIndex = partition(nums, left, right) //get the left pointer returned
    //more elements on the left side
    if (left < pivotIndex - 1) quickSort(nums, left, pivotIndex - 1)
    //more elements on the right side
    if (pivotIndex < right) quickSort(nums, pivotIndex, right)
  }
  return nums //return the sorted array
}
let nums = [6, 3, 1, 8, 5, 2, 0]
console.log(quickSort(nums, 0, nums.length - 1))
