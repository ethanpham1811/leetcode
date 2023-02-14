/* 
  - Worst, not suitable for big data. 
  - Recursion solution, like buble & insertion
  - Look for smallest num in the right, and swap with current
  Time: best: O(n) worst: O(n^2)
  Space: O(1)
  STABLE
*/
export function selectionSort(arr) {
  let min
  for (let i = 0; i < arr.length; i++) {
    //index of the smallest element to be the ith element.
    min = i
    //Check through the rest of the array for a lesser element
    for (let j = i + 1; j < arr.length; j++) if (arr[j] < arr[min]) min = j
    //compare & swap
    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}

console.log(selectionSort([29, 72, 13, 87, 66, 52, 51, 36]))
