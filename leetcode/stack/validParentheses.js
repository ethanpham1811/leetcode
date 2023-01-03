/* 
  Stack solution
  - if ([{ push its repsective counterpart to stack
  - if not -> check with the current stack -> not match return false
*/
export const isValid = function (str) {
  const stack = []
  let res = true

  for (let symbol of str) {
    if (symbol == '(') stack.push(')')
    else if (symbol == '{') stack.push('}')
    else if (symbol == '[') stack.push(']')
    else if (stack.pop() !== symbol) return false
  }
  return stack.length == 0
}
console.log(isValid('([]{})'))

/* My SOlution */
const isValid2 = function (str) {
  const open = '([{'
  const map = new Map()
  map.set('(', ')').set('[', ']').set('{', '}')
  let res = true

  const stack = new Map()
  let counter = 0

  for (let symbol of str)
    if (open.includes(symbol)) stack.set(++counter, symbol)
    else if (map.get(stack.get(counter)) === symbol) stack.delete(counter--)
    else return false

  if (counter > 0) return false

  return res
}
console.log(isValid2('([]{})'))
