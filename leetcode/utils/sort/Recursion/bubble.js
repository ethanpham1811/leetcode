/* Push the biggest num to the end of the array every iteration 
- Swap with element to the right
- Slower than Insertion, not recommend for ordinary sorting job
- Suitable if need to find small error or if the array amost sorted
  Time: n.(n/2) - best: O(n)
  Space: O(1)
  STABLE
*/
export function bubbleSort(arr) {
  // a flag to short circuit
  let isPerfect = true
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        isPerfect = false
        ;[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
    // if there is no swap operation in the current iteration => done
    if (isPerfect) return arr
  }
  return arr
}

console.log(bubbleSort([3, 4, 5, 6, 8]))
