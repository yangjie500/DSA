// Just a simple Graph 

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(adjacentVertex, vertex)
    }
    delete this.adjacencyList[vertex]
  }

  addEdges(v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => {
      if (vertex != vertex2) return true
    })

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => {
      if (vertex != vertex1) return true
    })
  }
}

const g = new Graph()

g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("Aspen")
g.addVertex("Hong Kong")
g.addVertex("Los Angeles")

g.addEdges("Tokyo", "Hong Kong")
g.addEdges("Dallas", "Hong Kong")
g.addEdges("Dallas", "Los Angeles")
g.addEdges("Hong Kong", "Los Angeles")
g.addEdges("Dallas", "Tokyo")
g.addEdges("Dallas", "Aspen")
//g.removeEdge("Dallas", "Aspen")

console.log(g)