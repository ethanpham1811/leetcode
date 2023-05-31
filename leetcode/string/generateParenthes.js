/* 
- open == close, => '(' because, all the brackets till now have been balanced
- close = 0, => '('
- open = 0, => ')'
- All the remaining cases, we have both the choices.
We get an answer, when count of open == 0 and count of close == 0. */

function build(com, open, close, ans) {
  if (open == 0 && close == 0) {
    ans.push(com)
    return
  }
  if (open == close || close == 0) build(com + '(', open - 1, close, ans)
  else if (open == 0) build(com + ')', open, close - 1, ans)
  else {
    build(com + '(', open - 1, close, ans)
    build(com + ')', open, close - 1, ans)
  }
}
function generateParenthesis(n) {
  let open = n
  let close = n
  const ans = []
  let com = ''
  build(com, open, close, ans)
  return ans
}
console.log(generateParenthesis(4))
