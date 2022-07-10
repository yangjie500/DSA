function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


//console.log(bubbleSort([1,6,2,7,9,10,15,3,26,23,8,13,16]))
console.log(bubbleSort([1,2,3,4,7,5,8,9,10]))

function optimizedBubbleSort(arr) {
  let noSwap = false;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = true;
      }
    }

    if (noSwap === true) break;
  }
  return arr;
}


//console.log(bubbleSort([1,6,2,7,9,10,15,3,26,23,8,13,16]))
console.log(optimizedBubbleSort([1,2,3,4,7,5,8,9,10]))//