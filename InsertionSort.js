function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {

    let currVal = arr[i];

    for (let j = i - 1; j >= 0; j--) {

      if (currVal < arr[j]) {
        arr[j + 1] = arr[j];
      } 

      if (currVal > arr[j]) {
        arr[j + 1] = currVal;
        break;
      }

      if (j === 0) {
        arr[j] = currVal;
      }

      
      console.log(i, arr)
      
    }
  }

  return arr
}

function insertionSortAns(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];

    }

    arr[j + 1] = currentVal;
  }
  return arr
}

console.log(insertionSort([19, 44, 38, 5, 47, 15]));
console.log(insertionSortAns([19, 44, 38, 5, 47, 15]));//