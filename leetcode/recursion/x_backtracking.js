/* 
  ---------------------Backtracking n^3-------------------
  -- to find possible combination regarless of duplicaion--
  function backTrack(res, args){
    if ( GOAL REACHED )
      add solution to res
      return
    else
      for(i=0, i< NB_CHOICES; i++) 
        if (CHOICE[i] is valid)
          make_choice[i]
          backTrack(res, args)
          undo_choice[i]
  }
*/
export function main(array) {
  let res = []
  const used = Array(array.length).fill(false)
  let permutation = []
  backtrack(res, array, permutation, used)
  return res
}

function backtrack(res, array, permutation, used) {
  if (permutation.length === array.length) {
    res.push([...permutation])
    return
  }
  for (let i = 0; i < array.length; i++) {
    if (!used[i]) {
      used[i] = true
      permutation.push(array[i])
      backtrack(res, array, permutation, used)
      used[i] = false
      permutation.pop()
    }
  }
}
console.log(main([10, 1, 2, 7, 6, 1, 5], 8))
