const { BinarySearchTree} = require('./BinarySearchTree')

class BFS extends BinarySearchTree{
  constructor() {
    super()
  }

  search() {
    const queue = []
    const visited = []

    queue.push(this.root)

    while (queue.length) {
      const currNode = queue.shift()

      if (currNode.left) queue.push(currNode.left)
      if (currNode.right) queue.push(currNode.right)
      visited.push(currNode.val)
    }

    return visited
  }
}

tree = new BFS()

/*
        10
    6      15
  3   8       20
*/

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.search())

