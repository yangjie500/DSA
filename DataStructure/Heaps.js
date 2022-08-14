// Insertion: O(log n)
// Removal: O(log n)
// Search : O(n)

// 2n + 1 and 2n + 2
// (n - 1) // 2

class MaxBinaryHeap{
  constructor() {
    this.values = []
  }

  insert(val) {
    this.values.push(val);
    if (this.values.length == 0) {return this;}

    let val_index = this.values.length - 1;
    let temp;
    while(val_index != 0) {
      let parent_index = Math.floor((val_index - 1) / 2)
      if (this.values[val_index] > this.values[parent_index]) {
        temp = this.values[val_index];
        this.values[val_index] = this.values[parent_index];
        this.values[parent_index] = temp;
        val_index = parent_index
      } else {
        return this
      }
    }
  }

  extractMax() {
    // Swap the end and replace it to the top
    const largestValue = this.values[0] 
    const endValue = this.values.pop();
    // Edge case: when 1 element
    if (this.values.length == 0) return largestValue
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
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (rightChild > element && swap === null) || 
          (rightChild > leftChild && swap !== null) 
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
    return largestValue;
  }

}


const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())

console.log(heap)