function _pivot(arr, start=0, end=arr.length - 1) {
  let pivotIndex = start;
  let pivot = arr[start];
  let temp; 
  for (let i = start + 1; i <= end; i++) {
    
    if (pivot > arr[i]) {
      pivotIndex++;

      temp = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = temp;

    }
  }

  arr[start] = arr[pivotIndex];
  arr[pivotIndex] = pivot;

  return pivotIndex;

}
//
//console.log(_pivot([4, 2, 1, 3]))

function quickSort(arr, left=0, right=arr.length-1) {
  if (left < right) {
    const pivotIdx = _pivot(arr, left, right);

    quickSort(arr, left, pivotIdx-1)
    quickSort(arr, left=pivotIdx+1, right);
  }
  return arr;
}

console.log(quickSort([25,34,65,33,12,5,2,7,100,77]))