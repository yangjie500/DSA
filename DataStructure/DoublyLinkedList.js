class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (this.length === 0) return undefined
    const poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }

  shift() {
    if (this.length === 0) return undefined
    const oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--;
    return oldHead
  }

  unshift(val) {
    const newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++;
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined
    const midIndex = this.length / 2
    if (index <= midIndex) {
      let count = 0
      let currNode = this.head
      while (count != index) {
        currNode = currNode.next
        count++;
      }
      return currNode
    } else {
      let count = this.length - 1
      let currNode = this.tail
      while (count != index) {
        currNode = currNode.prev
        count--;
      }
      return currNode
    }
  }

  set(index, val) {
    const node = this.get(index)
    if (!node) return false
    node.val = val
    return true
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false
    if (index === 0) {this.unshift(val); return true }
    if (index === this.length) {this.push(val); return true }
    const newNode = new Node(val)
    const prevNode = this.get(index - 1)
    newNode.next = prevNode.next
    prevNode.next.prev = newNode
    prevNode.next = newNode
    newNode.prev = prevNode
    this.length++;
    return true

  }

  remove(index) {
    if (index < 0 || index >= this.length) return false
    if (index === 0) {return this.shift();}
    if (index === this.length -1 ) {return this.pop();}
    const removeNode = this.get(index)
    const prevNode = removeNode.prev
    const nextNode = removeNode.next

    prevNode.next = nextNode
    nextNode.prev = prevNode
    removeNode.next = null
    removeNode.prev = null

    this.length--;
    return removeNode
  }
}

const DLL = new DoublyLinkedList()

DLL.push(5)
DLL.push(10)
DLL.push(15)
DLL.unshift(0)
DLL.push(20)
DLL.remove(1)


console.log(DLL.head.next)





