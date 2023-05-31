const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]
/* https://leetcode.com/problems/valid-sudoku/ */
const isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const horizonCheck = new Set()
    const verticalCheck = new Set()
    for (let j = 0; j < 9; j++) {
      const horizonNum = board[i][j]
      const verticalNum = board[j][i]

      if (horizonCheck.has(horizonNum) && horizonNum !== '.') return false
      if (verticalCheck.has(verticalNum) && verticalNum !== '.') return false

      horizonNum !== '.' && horizonCheck.add(horizonNum)
      verticalNum !== '.' && verticalCheck.add(verticalNum)
    }
  }

  for (let i = 0; i < 9; i = i + 3) {
    for (let j = 0; j < 9; j = j + 3) {
      const allCheck = new Set()
      let r = 0
      let c = 0
      while (r < 3 && c < 3) {
        const num = board[i + r][j + c]
        if (allCheck.has(num) && num !== '.') return false
        num !== '.' && allCheck.add(num)
        if (c + 1 < 3) {
          c++
        } else {
          c = 0
          r++
        }
      }
    }
  }

  return true
}
console.log(isValidSudoku(board))
