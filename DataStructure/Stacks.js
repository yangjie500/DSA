/*
  Insertion - O(1)
  Removal - O(1)
  Searching - O(N)
  Access - O(N)
*/
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
// Remember removing from the end, not O(1)
// That why push and pop is opposite of SLL
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      const tempNode = this.first
      this.first = newNode
      this.first.next = tempNode
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null
    const removeNode = this.first
    if (this.size === 1) {
      this.last = null
    }
    this.first = this.first.next
    this.size--;
    return removeNode
  }
}

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.pop()
stack.pop()

console.log(stack)

