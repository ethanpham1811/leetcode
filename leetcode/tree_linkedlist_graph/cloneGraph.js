/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

import {Node} from '../utils/graph.js'

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
node1.addNode([node2, node4])
node2.addNode([node1, node3])
node3.addNode([node2, node4])
node4.addNode([node1, node3])

/* Rerference assignment + DFS
- build node using DFS
- store already built node in map
- if alreadyy built -> return that node
- if not -> repeat process
*/
const cloneGraph = function (graph) {
  if (!graph) return null
  const hasCopied = new Map()
  return dfs(graph, hasCopied)
}
const dfs = function (node, hasCopied) {
  if (hasCopied.has(node.val)) return hasCopied.get(node.val)

  const graphNode = new Node(node.val)
  hasCopied.set(node.val, graphNode)

  for (const nei of node.neighbors) graphNode.neighbors.push(dfs(nei, hasCopied))

  return graphNode
}
console.log(cloneGraph(node1))
