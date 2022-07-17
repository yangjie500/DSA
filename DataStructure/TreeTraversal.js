const { BinarySearchTree } = require('./BinarySearchTree')

class TreeTraversal extends BinarySearchTree{
  constructor() {
    super()
  }

  BFS() {
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

  DFSPreOrder() {
    const data = []
    const currNode = this.root
    function traverse(node) {
      data.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(currNode)
    return data
  }

  DFSPostOrder() {
    const data = []
    const currNode = this.root
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.val)
    }
    traverse(currNode)
    return data
  }

  DFSInOrder() {
    const data = []
    const currNode = this.root
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.val)
      if (node.right) traverse(node.right)
    }
    traverse(currNode)
    return data
  }
}

tree = new TreeTraversal()

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

console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())
