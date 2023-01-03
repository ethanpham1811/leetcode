/* https://leetcode.com/problems/course-schedule/
[[0,1], [0,2], [1,3], [1,4], [3,4]]
- convert above param to new map below:
{0:[1,2], 1:[3,4], 3:[4]}
- run DFS through every node
- remove one from map if done it's dfs round
*/
const canFinish = function (numCourses, prerequisites) {
  const preMap = {}
  for (const [key, val] of prerequisites) preMap[key] = preMap[key] ? [...preMap[key], val] : [val]
  const isVisited = new Set()
  for (let i = 0; i < numCourses; i++) if (!dfs(preMap, i, isVisited)) return false

  return true
}
const dfs = function (preMap, cur, isVisited) {
  if (!preMap[cur]) return true
  if (isVisited.has(cur)) return false

  isVisited.add(cur)
  for (const pre of preMap[cur]) if (!dfs(preMap, pre, isVisited)) return false
  isVisited.delete(cur)

  preMap[cur] = null
  return true
}

// FIXME:
/* Queue solution:
- loop through prerequisites, store the degree of the node base on the freq[0]
- push 0 degree to Queue
- while(!queue.isEmpty){ ....}
- minus the degree of neibor by 1, if it reach 0, push to queue, repeat process
*/
