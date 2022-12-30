export function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val
  this.neighbors = neighbors === undefined ? [] : neighbors
  this.addNode = function (array) {
    for (const node of array) {
      this.neighbors.push(node)
    }
  }
}

export function Graph() {
  this.edges = []
  this.size = 0
  this.nums = new Set()
  this.vertices = new Map()

  this.construct = function (edges) {
    if (!edges) return
    for (const e of edges) {
      this.nums.add(e[0])
      this.nums.add(e[1])
    }
    for (const v of this.nums) {
      this.size++
      this.vertices.set(v, new GraphNode(v, []))
    }
    for (const e of edges) {
      this.vertices.get(e[0]).adjacents.push(this.vertices.get(e[1]))
      this.vertices.get(e[1]).adjacents.push(this.vertices.get(e[0]))
    }
  }
  this.addVertex = function (v) {
    this.vertices.add(new GraphNode(v, []))
  }
  this.addEdge = function (v, w) {
    this.vertices.get(v).push(w)
    this.vertices.get(w).push(v)
  }
  this.printGraph = function () {
    for (let i of this.vertices.values()) {
      let conc = ''
      for (let j of i.adjacents) conc += j + ' '
      console.log(i.val + ' -> ' + conc)
    }
  }
}
