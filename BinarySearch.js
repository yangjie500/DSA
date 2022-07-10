function binarySearch(arr, val){
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === val) return mid;
      if (arr[mid] > val) {
        right = mid - 1;
      }
      if (arr[mid] < val) {
        left = mid + 1;
      }
      console.log(left , right)
  }
  return -1
}

console.log(binarySearch([1,2,3,4,5], 2))//