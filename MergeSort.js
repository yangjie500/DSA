function merge(arr1, arr2) {
  const sortedArr = [];
  let i = 0;
  let j = 0;

  console.log(arr1, arr2)
  
  while ((i < arr1.length) && (j < arr2.length)) {

    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }

  while(i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }

  while(j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }
  return sortedArr;
}

//console.log(merge([1,3, 10, 50], [2, 14, 99, 100]));

function mergeSort(arr) {
  
  if (arr.length <= 1) {
    return arr
  }

  const halve = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, halve));
  let right = mergeSort(arr.slice(halve));
  return merge(left, right);
  
  
}

console.log(mergeSort([1,100, 3, 50, 2, 14, 99, 53]));//