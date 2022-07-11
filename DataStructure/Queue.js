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

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode;
      this.last = newNode
    }

    return ++this.size
  }

  dequeue() {
    if (!this.first) return null
    const removeNode = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--;
    return removeNode

  }

}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
queue.dequeue()
queue.dequeue()

console.log(queue)
