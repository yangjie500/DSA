class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue{
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    if (this.values.length == 0) {return this;}

    let val_index = this.values.length - 1;
    let temp;
    while(val_index != 0) {
      let parent_index = Math.floor((val_index - 1) / 2)
      if (this.values[val_index].priority < this.values[parent_index].priority) {
        temp = this.values[val_index];
        this.values[val_index] = this.values[parent_index];
        this.values[parent_index] = temp;
        val_index = parent_index
      } else {
        return this
      }
    }
  }

  dequeue() {
    // Swap the end and replace it to the top
    const minValue = this.values[0] 
    const endValue = this.values.pop();
    // Edge case: when 1 element
    if (this.values.length == 0) return minValue
    this.values[0] = endValue;

    // Now "bubble down"
    let idx = 0;
    const length = this.values.length;
    const element = this.values[idx];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      // always reset swap to null
      let swap = null;

      // Three possible condition excluding no swap, ie children is smaller than parent
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (rightChild.priority < element.priority && swap === null) || 
          (rightChild.priority < leftChild.priority && swap !== null) 
        ){
          swap = rightChildIdx;
        }
      }
      // no swap, break loop
      if (swap == null) break;
      // Swap them 
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    } 
    return minValue;
  }

}

let PR = new PriorityQueue()

PR.enqueue("Common cold", 3)
PR.enqueue("Gunshot wound", 1)
PR.enqueue("High fever", 2)

console.log(PR.dequeue())
console.log(PR.dequeue())
console.log(PR.dequeue())

console.log(PR)
