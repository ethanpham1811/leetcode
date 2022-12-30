/* 
  Stack solution
  - if ([{ push its repsective counterpart to stack
  - if not -> check with the current stack -> not match return false
*/
export const isValid = function (str) {
  const stack = new Map()
  let res = true
  let counter = 0

  for (let symbol of str) {
    if (symbol == '(') stack.set(++counter, ')')
    else if (symbol == '{') stack.set(++counter, '}')
    else if (symbol == '[') stack.set(++counter, ']')
    else if (stack.get(counter) === symbol) stack.delete(counter--)
    else return false
  }
  if (counter > 0) {
    return false
  }
  return res
}
console.log(isValid('([]{})'))
