/* https://leetcode.com/problems/combination-sum/
Backtracking wihout duplication 
same as coin change
*/
function dfs(res, list, target, index, com, total) {
  if (target == total) {
    res.push([...com])
    return
  }
  if (index >= list.length || total > target) return

  // com.push(list[i])
  // dfs(res, list, target, i, com, total + list[i])
  // com.pop()
  // dfs(res, list, target, i + 1, com, total) // important: i+1 === forloop (let j=i)

  // next iteration (like forloop) but with tweaked param, This fl cause duplication
  for (let i = index; i < list.length; i++) {
    com.push(list[i])
    dfs(res, list, target, i, com, total + list[i])
    com.pop()
  }
}
export function combinationSum(list, target) {
  const res = []
  dfs(res, list, target, 0, [], 0)
  return res
}

console.log(combinationSum([2, 3, 6, 7], 9))

let NO_OF_CHARS = 256
function areAnagram(str1, str2) {
  let count = []
  for (let i = 0; i < NO_OF_CHARS; i++) count[i] = 0
  let i = 0
  while (i < str1.length && i < str2.length) {
    count[ord(str1[i])] += 1
    count[ord(str2[i])] -= 1
    i += 1
  }
  if (str1.length != str2.length) return false
  for (let i = 0; i < NO_OF_CHARS; i++) {
    if (count[i]) return false
    return True
  }
}

function findAllAnagrams(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (areAnagram(arr[i], arr[j])) document.write(arr[i] + 'is anagram of' + arr[j])
    }
  }
}
let arr = ['geeksquiz', 'geeksforgeeks', 'abcd', 'forgeeksgeeks', 'zuiqkeegs']
let n = arr.length
findAllAnagrams(arr, n)
