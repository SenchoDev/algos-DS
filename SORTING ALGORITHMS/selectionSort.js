// Selection SORT

//ES5
// function selectionSort(arr){
//   for(var i = 0; i < arr.length; i++){
//     var lowest = i;
//     for(var j = i + 1; j < arr.length; j++ ){
//       if(arr[j] < arr[lowest]){
//         lowest = j;
//       }
//     }
//     if(i !== lowest){
//       var temp = arr[i];
//       arr[i] = arr[lowest];
//       arr[lowest] = temp;
//     }
//   }
//   return arr;
// }

//ES6

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    var lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

selectionSort([34, 22, 10, 19, 17]);