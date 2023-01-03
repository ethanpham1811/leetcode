/* https://leetcode.com/problems/course-schedule/
[[0,3],[0,4],[2,0],[2,1],[3,4]]
- convert above param to new map below:
{ '0': [ 3, 4 ], '2': [ 0, 1 ], '3': [ 4 ] }
- run DFS through every node
- remove one from map if done it's dfs round
*/
const canFinish = function (numCourses, prerequisites) {
  const preMap = {}
  const res = []
  for (const [key, val] of prerequisites) preMap[key] = preMap[key] ? [...preMap[key], val] : [val]
  const isVisited = new Set()
  for (let i = 0; i < numCourses; i++) {
    const com = new Set()
    dfs(preMap, i, isVisited, com, res)
    com.size == numCourses && res.push(com)
  }
  return res.length > 0 ? Array.from(res[0]) : []
}
const dfs = function (preMap, cur, isVisited, com, res) {
  if (!preMap[cur]) {
    com.add(cur)
    return true
  }
  if (isVisited.has(cur)) return false

  isVisited.add(cur)
  for (const pre of preMap[cur]) if (!dfs(preMap, pre, isVisited, com, res)) return false
  isVisited.delete(cur)

  com.add(cur)
  return true
}
console.log(
  canFinish(5, [
    [0, 3],
    [0, 4],
    [2, 0],
    [2, 1],
    [3, 4]
  ])
)
