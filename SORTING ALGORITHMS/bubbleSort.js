// BUBBLE SORT

//ES5
// function swap(arr, idx1, idx2){
//   var temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

// ES6
// const swap = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };


// ES5
// function bubbleSort(arr){
//   for(var i = arr.length; i > 0 ; i-- ){
//     for(var j = 0; j < i - 1; j++){
//       if(arr[j] > arr[j+1]){
//         var temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }
//   return arr;
// }


// ES6
// function bubbleSort(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if(arr[j] > arr[j + 1]){
//         swap(arr, j, j + 1);
//       }
//     }
//   }
// }
// bubbleSort([37, 45, 29, 8, 1]);

function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0 ; i-- ){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([37, 45, 29, 8, 1, 2, 3, 4, 5, 6]);


// when to use bubble Sort? Possibly we could use bubble sort if data is nearly sorted, but there is better way