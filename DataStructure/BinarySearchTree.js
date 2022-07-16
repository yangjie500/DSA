/*
  Insertion - O(log n)
  Searching - O(log n)
*/
class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insertRecursive(val, root=this.root) {
    const newNode = new Node(val)

    if (!this.root) {this.root = newNode; return this}
  
    const currNode = root;
    if (newNode.val < currNode.val) {
      if (!currNode.left) {currNode.left = newNode; return this}
      else this.insertRecursive(val, currNode.left)
    }

    else if (newNode.val > currNode.val) {
      if (!currNode.right) {currNode.right = newNode; return this}
      else this.insertRecursive(val, currNode.right)
    }
    
    else {console.log('Value Already Present'); return this}
  }

  findRecursive(val, root=this.root) {
    if (!root) return false

    const currNode = root
    let found = false
    if (currNode.val === val) return true

    if (val < currNode.val) found = this.findRecursive(val, currNode.left)
    else if (val > currNode.val) found = this.findRecursive(val, currNode.right)

    return found
  }

  insert(val) {
    const newNode = new Node(val)
    if (!this.root) {this.root = newNode; return this}
    let currNode = this.root

    while (true) {
      if (newNode.val < currNode.val) {
        if (!currNode.left) {currNode.left = newNode; return this}
        else {currNode = currNode.left} 
      }

      else if (newNode.val > currNode.val) {
        if (!currNode.right) {currNode.right = newNode; return this}
        else {currNode = currNode.right}
      }

      else {console.log('Value Already Present'); return this}
    }
  }

  find(val) {
    if (!this.root) return undefined
    let currNode = this.root
    while (true) {
      if (val == currNode.val) return currNode
      else if (val < currNode.val) currNode = currNode.left
      else currNode = currNode.right

      if (!currNode) return undefined; 
    }
  }

}

const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(4)
//console.log(tree.find(2))
//console.log(tree.root.left.left.right)

module.exports = { BinarySearchTree, Node }


