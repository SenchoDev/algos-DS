// Good for almost sorted data
function insertionSort(arr){
  for(var i = 1; i < arr.length; i++){
    var currentVal = arr[i];
    
    // 38
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
      // console.log(arr[j+1], arr[j]);
      // console.log('-------')
      arr[j+1] = arr[j];
      //console.log(arr);
      // [1, 2, 9, 76, 4]
    }
    arr[j+1] = currentVal;
  }
  return arr;
}

insertionSort([3,38,44,5,47,15])