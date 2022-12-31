/* JS default sort() algorithm
Push the i element to its proper position among the already sorted
- Swap with element to the left
- Less iteration than Bubble, faster than Bubble
- More popular in real life sorting job
  Time: n.(n/2) - best: O(n)
  Space: O(1)
  STABLE
*/
export function insertionSort(arr) {
  //Start from the second element.
  for (let i = 1; i < arr.length; i++) {
    //Go through the prev element
    for (let j = i - 1; j > -1; j--) {
      //value comparison using ascending order.
      if (arr[j + 1] < arr[j]) {
        //swap
        ;[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      } else break
    }
  }
  return arr
}

console.log(insertionSort([6, 23, 1, 10, 5, 2]))
