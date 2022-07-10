function selectionSort(arr) {
  let min;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {

      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;

    }

  }
  return arr;
}

console.log(selectionSort([19, 44, 38, 5, 47, 15]));
console.log(selectionSort([34, 22, 10, 19, 17]));