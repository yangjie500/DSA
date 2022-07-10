class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let curr = this.head;
    let prev = curr;

    while(curr.next) {
      prev = curr;
      curr = curr.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    
    return curr;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if(this.length === 0) {
      this.tail = null;
    }
    
    return temp;
  }

  unshift(val) {
    const newNode = new Node(val);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;

  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let count = 0;
    let curr = this.head;
    while (count !== index) {
      curr = curr.next;
      count++;
    }

    return curr;

  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }

    const prevNode = this.get(index - 1);
    const currNode = prevNode.next;

    const newNode = new Node(val);
    prevNode.next = newNode;
    newNode.next = currNode;

    this.length++;

    return true
  }

  remove(index) {
    if ( index < 0 || index >= this.length ) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    
    const prevNode = this.get(index - 1);
    const nodeTobeRemoved = prevNode.next;
    prevNode.next = nodeTobeRemoved.next;
    nodeTobeRemoved.next = null;

    this.length--;
    return nodeTobeRemoved;

  }

  reverse() {
    let currNode = this.head;
    let prevNode = this.head;
    let nextNode = this.head.next;
    this.tail = this.head;
    

    while (nextNode) {
      currNode = nextNode;
      nextNode = nextNode.next;    
      currNode.next = prevNode;
      prevNode = currNode;

    }

    this.head = prevNode;
    this.tail.next = null;
  }

  
}

const lst = new SinglyLinkedList();
lst.push('Hello')
lst.push('Bye')
lst.push('Hehe')

lst.insert(1,'WTF')
lst.insert(0, 'HOLYSHEET')
console.log(lst)
// console.log(lst.get(0))
// console.log(lst.get(1))
// console.log(lst.get(2))
// console.log(lst.get(3))
// console.log(lst.get(4))
// HOLYSHEET -> HELLO -> WTF -> BYE -> HEHE

lst.reverse()
console.log(lst.get(0))
console.log(lst.get(1))
console.log(lst.get(2))
console.log(lst.get(3))
console.log(lst.get(4))

console.log(lst)
//